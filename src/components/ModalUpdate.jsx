
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useRef, useState } from "react";


const initialState = {
    name: "",
    password: ""
}

export function ModalUpdate({ user, open, handleClose, updateUser }) {

    const [form, setForm] = useState(initialState);
    const {name, password} = form;

    const handleChange = ({target}) => {
        setForm( prev => ({
            ...prev,
            [target.name]: target.value
        }))

    }
  const handleClick = async () => {
    const result = await updateUser({id: user.id, name, password });
    if(result){
        handleClose()
    }
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogTitle>Actualizar {user.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escriba el nuevo nombre de usuario y la nueva contraseña.
          </DialogContentText>
            <TextField
            
              onChange={handleChange}
              type="text"
              variant="standard"
              margin="dense"
              required
              fullWidth
              id="name"
              label="Usuario"
              name="name"
              value={name}
              autoFocus
              autoComplete="off"
            />
            <TextField
              variant="standard"
              margin="dense"
              required
              fullWidth
              onChange={handleChange}
              name="password"
              value={password}
              label="Contraseña"
              type="password"
              id="password"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClick}>Actualizar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
