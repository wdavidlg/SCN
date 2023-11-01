import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { terapiaReducer } from "./terapiaReducer";
import { api } from "../api/api";
import { enqueueSnackbar } from "notistack";


export const TerapiaContext = createContext();

export const useTerapiaContext = () => {
    return useContext(TerapiaContext);
}

const initialState = {
    terapias: [],
    terapiaSelected: null,
  };

export const TerapiaProvider = ({children}) => {

    const [state, dispatch] = useReducer(terapiaReducer, initialState);

    const getAllByChild = async (idChild) => {
        try {
          const { data } = await api.get(`/therapy/${idChild}`);
          dispatch({
            type: "get",
            payload: { terapias: data.result },
          });
        } catch (error) {
          console.log(error);
        }
      };

      const insert = async (body, idChild) => {
        try {
          const { data } = await api.post("/therapy", {child: idChild, ...body});
          console.log("Resultado: ", data);
          dispatch({
            type: "post",
            payload: { terapia: data.result },
          });
          select(data.result)
          return true;
        } catch (error) {
          console.log(error.response.data);
          enqueueSnackbar(error.response.data.errors[0].msg, {
            variant: "error",
            autoHideDuration: 1500,
            anchorOrigin: {
              horizontal: "center",
              vertical: "top",
            },
          });
          return false;
        }
      };

      const update = async (id, body) => {
        try {
          const { data } = await api.put(`/therapy/${id}`, body);
          dispatch({
            type: "update",
            payload: { terapia: data.result },
          });
          select(data.result)
          return true;
        } catch (error) {
          console.log(error.response.data);
          enqueueSnackbar(error.response.data.errors[0].msg, {
            variant: "error",
            autoHideDuration: 1500,
            anchorOrigin: {
              horizontal: "center",
              vertical: "top",
            },
          });
          return false;
        }
      };

      const deleteTerapia = async (id) => {
        try {
          await api.delete(`/therapy/${id}`);
          dispatch({
            type: "delete",
            payload: { id },
          });
          deselect();
        } catch (error) {
          console.log(error.response.data);
        }
      };

      const select = (terapia) => {
        dispatch({
          type: "select",
          payload: {  terapia },
        });
      };
    
      const deselect = () => {
        dispatch({type: "deselect"});
      };

    return (
        <TerapiaContext.Provider value={{
            state,
            getAllByChild,
            deleteTerapia,
            select,
            insert,
            update
        }}>
            {children}
        </TerapiaContext.Provider>
    )
}
