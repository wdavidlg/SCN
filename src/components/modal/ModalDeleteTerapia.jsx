import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useModalContext } from "../../context/DialogContext";
import { useTerapiaContext } from "../../context/TerapiaContext";

export function ModalDeleteTerapia() {

  const { state: {terapiaSelected}, deleteTerapia } = useTerapiaContext();
  const { modalTerapiaDelete } = useModalContext();
  
  const handleDelete = async() => {
    await deleteTerapia(terapiaSelected.id);
    modalTerapiaDelete.close();
  };

  return (
    <div>
      <Dialog
        open={modalTerapiaDelete.visible}
        onClose={() => modalTerapiaDelete.close()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`¿Seguro que desea eliminar la terapia "${terapiaSelected?.name}"?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            La terapia se eliminará de forma permanente.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => modalTerapiaDelete.close()}>Cancelar</Button>
          <Button onClick={handleDelete} autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
