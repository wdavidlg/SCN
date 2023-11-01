import { createContext, useContext } from "react";
import { useModal } from "../hooks/useModal";

export const ModalContext = createContext(null);

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const modalDelete = useModal();
  const modalRegistroNuevo = useModal();

  const modalTerapiaNuevo = useModal();
  const modalTerapiaDelete = useModal();
  const modalTerapiaUpdate = useModal();

  return (
    <ModalContext.Provider
      value={{
        modalDelete,
        modalRegistroNuevo,
        modalTerapiaNuevo,
        modalTerapiaDelete,
        modalTerapiaUpdate
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
