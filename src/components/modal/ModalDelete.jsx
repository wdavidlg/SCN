import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRecordContext } from "../../context/RecordContext";
import { useModalContext } from "../../context/DialogContext";
import { useNavigate } from "react-router-dom";

export function ModalDelete() {

  const { state: {recordSelected}, deleteRecord } = useRecordContext();
  const { modalDelete } = useModalContext();
  const navigate = useNavigate()
  
  const handleDelete = async() => {
    await deleteRecord(recordSelected.id);
    modalDelete.close();
    navigate("/listado");
  };

  return (
    <div>
      <Dialog
        open={modalDelete.visible}
        onClose={() => modalDelete.close()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`¿Seguro que desea eliminar el usuario "${recordSelected?.name}"?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            El usuario se eliminará de forma permanente.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => modalDelete.close()}>Cancelar</Button>
          <Button onClick={handleDelete} autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
