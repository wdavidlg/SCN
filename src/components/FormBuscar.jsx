import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const FormBuscar = ({onSearch}) => {

  const [termino, setTermino] = useState("")

  const handleChange = (e) => {
    setTermino(e.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSearch(termino)
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1 }}
      style={{
        width: "100%",
        maxWidth: 300,
        display: "flex",
        flexDirection: "row",
        marginBottom: 10,
      }}
    >
      <TextField
        type="text"
        fullWidth
        id="name"
        label="Nombre o apellido"
        name="termino"
        autoFocus
        autoComplete="off"
        size="small"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        <SearchIcon />
      </Button>
    </Box>
  );
};
