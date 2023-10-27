import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../context/AuthContext";
import myImage from '../assets/logo.jpeg';
import { Grid } from "@mui/material";


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export const LoginPage = () => {
  const { state, login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data.get("name"), data.get("password"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" 
      style={{
        width: "90%", maxWidth: 1000,
        margin: "30px auto",
       justifyContent: "space-between"}}>
        <Grid item xs={12} sm={5} style={{padding: 50, display: "flex", alignItems: "center"}}>
          <img style={{width: "100%"}} src={myImage} title="Logo" />
        </Grid>
        <Grid item xs={12} sm={5} style={{ margin: "0 auto"}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography mb={2} component="h2" variant="h4" align="center">
              SOLIDARIDAD CON LOS NIÑOS
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
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
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Typography
                component="p"
                variant="p"
                align="center"
                color="error"
                fontStyle="italic"
                fontSize={14}
              >
                {state.error}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
