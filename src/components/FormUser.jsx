import { Box, Button, TextField } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

export const FormUser = ({ postUsers }) => {


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("name"), data.get("password"));
    await postUsers({ name: data.get("name"), password: data.get("password") });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1 }}
      style={{
        width: "75%",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <TextField
        type="text"
        margin="normal"
        required
        fullWidth
        id="nameaa"
        label="Usuario"
        name="name"
        autoFocus
        autoComplete="off"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type="password"
        id="password"
      />

      <Button
        type="submit"
        startIcon={<PersonAddAltIcon />}
        variant="contained"
      >
        Crear nuevo
      </Button>
    </Box>
  );
};
