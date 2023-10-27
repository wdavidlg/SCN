import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "../hooks/useForm";
import { useRecordContext } from "../context/RecordContext";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { useModalContext } from "../context/DialogContext";
import { ModalRegistroNuevo } from "../components/modal/ModalRegistroNuevo";

const initialForm = {
  name: "",
  lastName: "",
  birthDate: "",
  diagnostic: "",
  atention: "",
  duration: "",
  needOperation: "",
  needMedicament: "",
  dateInitial: "",
  dateFinal: "",
  civilState: "",
  nameResponsible: "",
  address: "",
  phoneNumber: "",
};

export const RegistrarPage = () => {
  const { insert } = useRecordContext();
  const { values: form, handleInputChange, reset } = useForm(initialForm);
  const {modalRegistroNuevo} = useModalContext();

  const handleClickSave = async() => {
    const r = await insert(form);
    if(r){
      modalRegistroNuevo.open();
      reset();
    }
  };

  const handleClear = () => {
    reset()
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}>
      {/* -----------------PACIENTE--------------------------- */}
      <div>
        <IconButton title="Limpiar" onClick={handleClear} aria-label="delete">
          <ClearAllIcon color="secondary" style={{ fontSize: 30 }} />
        </IconButton>
      </div>
      <Typography fontWeight={"bold"}>Datos del paciente</Typography>
      <TextField
        onChange={handleInputChange}
        id="name"
        name="name"
        value={form.name}
        label="Nombre"
        size="small"
        type="text"
        variant="standard"
        margin="none"
        required
        fullWidth
        autoFocus
        autoComplete="off"
      />
      <TextField
        onChange={handleInputChange}
        id="lastName"
        name="lastName"
        value={form.lastName}
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
        value={form.birthDate}
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
      {/* -----------------DIAGNOSTICO MÉDICO--------------------------- */}

      <Typography fontWeight={"bold"} style={{ marginTop: 20 }}>
        Diagnostico médico
      </Typography>
      <TextField
        onChange={handleInputChange}
        id="diagnostic"
        name="diagnostic"
        value={form.diagnostic}
        label="Diagnostico médico"
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
        id="atention"
        name="atention"
        value={form.atention}
        label="Tipo de atención"
        size="small"
        type="text"
        variant="standard"
        margin="none"
        required
        fullWidth
        autoComplete="off"
      />

      <FormControl style={{ marginTop: 20 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Duración
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="duration"
          value={form.duration}
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="temporal"
            control={<Radio />}
            label="Temporal"
          />
          <FormControlLabel
            value="permantente"
            control={<Radio />}
            label="Permanente"
          />
        </RadioGroup>
      </FormControl>

      <FormControl style={{ marginTop: 20 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Necesita operación
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="needOperation"
          value={form.needOperation}
          onChange={handleInputChange}
        >
          <FormControlLabel value={"si"} control={<Radio />} label="Si" />
          <FormControlLabel value={"no"} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControl style={{ marginTop: 20 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Necesita medicamento
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="needMedicament"
          value={form.needMedicament}
          onChange={handleInputChange}
        >
          <FormControlLabel value={"si"} control={<Radio />} label="Si" />
          <FormControlLabel value={"no"} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <TextField
        onChange={handleInputChange}
        id="dateInitial"
        name="dateInitial"
        value={form.dateInitial}
        label="Fecha de ingreso"
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
        id="dateFinal"
        name="dateFinal"
        value={form.dateFinal}
        label="Fecha de salida"
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

      {/* -----------------RESPONSABLE--------------------------- */}

      <Typography fontWeight={"bold"} style={{ marginTop: 20 }}>
        Datos del Responsable
      </Typography>
      <TextField
        onChange={handleInputChange}
        id="nameResponsible"
        name="nameResponsible"
        value={form.nameResponsible}
        label="Responsable"
        size="small"
        type="text"
        variant="standard"
        margin="none"
        required
        fullWidth
        autoComplete="off"
      />
      <FormControl style={{ marginTop: 25 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Estado Civil
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="civilState"
          value={form.civilState}
          onChange={handleInputChange}
        >
          <FormControlLabel
            value="soltero"
            control={<Radio />}
            label="Soltera(o)"
          />
          <FormControlLabel
            value="casado"
            control={<Radio />}
            label="Casada(o)"
          />
          <FormControlLabel
            value="unido"
            control={<Radio />}
            label="Unida(o)"
          />
        </RadioGroup>
      </FormControl>
      {/* <FormControl fullWidth style={{marginTop: 30}}>
        <InputLabel id="demo-simple-select-label">Estado Civil</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={civilState}
          label="Estado Civil"
          onChange={handleChange}
        >
          <MenuItem value={1}>Soltera(o)</MenuItem>
          <MenuItem value={2}>Casada(o)</MenuItem>
          <MenuItem value={3}>Unida(o)</MenuItem>
        </Select>
      </FormControl> */}
      <TextField
        onChange={handleInputChange}
        id="address"
        name="address"
        value={form.address}
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
        value={form.phoneNumber}
        label="Telefono"
        size="small"
        type="text"
        variant="standard"
        margin="dense"
        required
        fullWidth
        autoComplete="off"
      />
      <Button
        style={{ width: 200, margin: "20px auto" }}
        variant="contained"
        onClick={handleClickSave}
      >
        GUARDAR
      </Button>

      <ModalRegistroNuevo />
    </div>
  );
};
