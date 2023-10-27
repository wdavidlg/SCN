import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRecordContext } from "../../context/RecordContext";
import { useModalContext } from "../../context/DialogContext";
import { useNavigate } from "react-router-dom";

export function ModalRegistroNuevo() {

  const { state: {recordSelected} } = useRecordContext();
  const { modalRegistroNuevo } = useModalContext();
  const navigate = useNavigate()
  
  const handleCancel = () => {
    modalRegistroNuevo.close();
  }

  const handleOk = () => {
    modalRegistroNuevo.close();
    navigate("/ver");
  };

  return (
    <div>
      <Dialog
        open={modalRegistroNuevo.visible}
        onClose={() => modalRegistroNuevo.close()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`REGISTRO EXITOSO`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Qué desear hacer ahora?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} autoFocus>Seguir registrando</Button>
          <Button onClick={handleOk} >
            Ver registro
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
