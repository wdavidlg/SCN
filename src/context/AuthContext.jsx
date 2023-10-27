import { createContext, useEffect, useReducer } from "react";
import { authReducer } from "./authReducer";
import { api } from "../api/api";

export const AuthContext = createContext();

const initialState = {
  status: "checking",
  token: null,
  user: null,
  error: null,
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      
      if (token) {
        const { data } = await api.get("/auth/renew", {
          headers: { "x-token": token },
        });

        dispatch({
          type: "login",
          payload: { user: data.user, token: data.token },
        });
      }else {
        dispatch({
            type: "logout"
          })
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "logout"
      })
    }
  };

  const login = async (name, password) => {
    const body = { name, password };
    try {
      const { data } = await api.post("/auth", body);
      const { user, token } = data;
      dispatch({
        type: "login",
        payload: { token, user },
      });
      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      if (error.response.status === 400) {
        dispatch({
          type: "error",
          payload: { error: error.response.data.errors[0].msg },
        });
      } else {
        console.log("Por favor comuniquese con el administrador");
      }
    }
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        state,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
