import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";
import { DialogContext } from "../context/DialogContext";
import { RecordContext } from "../context/RecordContext";
import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  lastName: "",
  birthDate: "",
  address: "",
  phoneNumber: "",
  nameResponsible: "",
}

export const DialogNew = () => {
  
  const { openNew, handleCloseNew } = useContext(DialogContext);
  const { values, handleInputChange, reset } = useForm(initialForm);
  const { post } = useContext(RecordContext);

  const { name, lastName, birthDate, address, phoneNumber, nameResponsible } = values;

  const close = () => {
    reset();
    handleCloseNew();
  };

  const handleClick = async() => {
    const result = await post(values);
    if(result){
      close()
    }
  };

  return (
    <div>
      <Dialog open={openNew}>
        <DialogTitle>Crear Nuevo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor llene todos los campos.
          </DialogContentText>
          <TextField
            onChange={handleInputChange}
            id="name"
            name="name"
            value={name}
            label="Nombre"
            size="small"
            type="text"
            variant="standard"
            margin="dense"
            required
            fullWidth
            autoFocus
            autoComplete="off"
          />
          <TextField
            onChange={handleInputChange}
            id="lastName"
            name="lastName"
            value={lastName}
            label="Apellido"
            size="small"
            type="text"
            variant="standard"
            margin="dense"
            required
            fullWidth
            autoComplete="off"
          />
          <TextField
            onChange={handleInputChange}
            id="birthDate"
            name="birthDate"
            value={birthDate}
            label="Nacimiento"
            size="small"
            type="date"
            variant="standard"
            margin="dense"
            required
            fullWidth
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            onChange={handleInputChange}
            id="address"
            name="address"
            value={address}
            label="Direccion"
            size="small"
            type="text"
            variant="standard"
            margin="dense"
            required
            fullWidth
            autoComplete="off"
          />
          <TextField
            onChange={handleInputChange}
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            label="Telefono"
            size="small"
            type="text"
            variant="standard"
            margin="dense"
            required
            fullWidth
            autoComplete="off"
          />
          <TextField
            onChange={handleInputChange}
            id="nameResponsible"
            name="nameResponsible"
            value={nameResponsible}
            label="Responsable"
            size="small"
            type="text"
            variant="standard"
            margin="dense"
            required
            fullWidth
            autoComplete="off"
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancelar</Button>
          <Button onClick={handleClick}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
