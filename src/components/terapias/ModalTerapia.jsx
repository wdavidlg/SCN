import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useModalContext } from "../../context/DialogContext";
import { useForm } from "../../hooks/useForm";
import { useTerapiaContext } from "../../context/TerapiaContext";
import { useRecordContext } from "../../context/RecordContext";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const initialForm = {
  name: "",
  date: "",
  duration: 30,
  objetive: "",
  observation: "",
  evaluation: 0,
};

export const ModalTerapia = () => {
  const { modalTerapiaNuevo } = useModalContext();
  const { values: form, handleInputChange, reset } = useForm(initialForm);
  const { insert } = useTerapiaContext();
  const {
    state: { recordSelected },
  } = useRecordContext();

  const close = () => {
    reset();
    modalTerapiaNuevo.close();
  };

  const handleClick = async () => {
    if (!recordSelected) return;
    const result = await insert(form, recordSelected.id);
    if (result) {
      modalTerapiaNuevo.close();
    }
  };

  return (
    <div>
      <Dialog open={modalTerapiaNuevo.visible}>
        <DialogTitle>Ingresar Terapia</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor llene todos los campos.
          </DialogContentText>
          <TextField
            onChange={handleInputChange}
            id="name"
            name="name"
            value={form.name}
            label="Nombre de la terapia"
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
            id="date"
            name="date"
            value={form.date}
            label="Fecha"
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
            id="duration"
            name="duration"
            value={form.duration}
            label="Duración (minutos)"
            size="small"
            type="number"
            variant="standard"
            margin="dense"
            required
            fullWidth
            autoComplete="off"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: 0,
            }}
          />
          <TextField
            onChange={handleInputChange}
            id="objetive"
            name="objetive"
            value={form.objetive}
            label="Objetivo"
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
            id="observation"
            name="observation"
            value={form.observation}
            label="Observación"
            size="small"
            type="text"
            variant="standard"
            margin="dense"
            required
            fullWidth
            autoComplete="off"
          />
          <Typography component="legend" style={{marginTop: 10}}>Evaluación: </Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: 0,
              padding: 0,
              height: "auto"
            }}
          >
            <Rating
              max={10}
              value={Number(form.evaluation)}
              onChange={handleInputChange}
              name="evaluation"
            />
            <p style={{ margin: 0, padding: 0, marginLeft: 2 }}>({form.evaluation})</p>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancelar</Button>
          <Button onClick={handleClick}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
