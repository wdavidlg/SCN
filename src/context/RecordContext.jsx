import { createContext, useContext, useEffect, useReducer } from "react";
import { recordReducer } from "./recordReducer";
import { api } from "../api/api";
import { enqueueSnackbar } from "notistack";

export const RecordContext = createContext(null);

const initialState = {
  records: [],
  recordSelected: null,
};

export const useRecordContext = () => {
  return useContext(RecordContext);
};

export const RecordProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recordReducer, initialState);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      const { data } = await api.get("/child");
      dispatch({
        type: "get",
        payload: { records: data.result },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const insert = async (body) => {
    try {
      const { data } = await api.post("/child", body);
      console.log("Resultado: ", data);
      dispatch({
        type: "post",
        payload: { record: data.result },
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
      const { data } = await api.put(`/child/${id}`, body);
      dispatch({
        type: "update",
        payload: { record: data.result },
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

  const deleteRecord = async (id) => {
    try {
      await api.delete(`/child/${id}`);
      dispatch({
        type: "delete",
        payload: { id },
      });
      deselect();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const select = (record) => {
    dispatch({
      type: "select",
      payload: { record },
    });
  };

  const deselect = () => {
    dispatch({type: "deselect"});
  };

  const searchRecords = (text) => {
    text = text.toLowerCase();

    return state.records.filter((record) => {
      if (record.name.toLowerCase().includes(text)) {
        return true;
      }
      if (record.lastName.toLowerCase().includes(text)) {
        return true;
      }
      return false;
    });
  };

  return (
    <RecordContext.Provider
      value={{
        state,
        getAll,
        insert,
        deleteRecord,
        select,
        update,
        searchRecords,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};
