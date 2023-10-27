import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import { api } from "../api/api";
import { enqueueSnackbar, SnackbarProvider } from "notistack";
import { CardUser } from "../components/CardUser";
import { FormUser } from "../components/FormUser";
import { AuthContext } from "../context/AuthContext";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export function AdmonPage() {
  const [users, setUsers] = useState([]);

  const {logout} = useContext(AuthContext);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const {
      data: { users },
    } = await api.get("/users");
    setUsers(users);
  };

  const deleteUser = async (id)=> {
    try {
        const { data } = await api.delete(`/users/${id}`);
        console.log(data);
        const newUsers = users.filter((item) => item.id !== id);
        setUsers(newUsers);
      } catch (error) {
          console.log(error.response.data);
      }

  }

  const postUsers = async (body) => {
    try {
      const { data } = await api.post("/users", body);
      setUsers((prev) => [data.user, ...prev]);
    } catch (error) {
      enqueueSnackbar(error.response.data.errors[0].msg, {
        variant: "error",
        autoHideDuration: "3000",
        anchorOrigin: {
          horizontal: "center",
          vertical: "top",
        },
      });
    }
  };

  const updateUser = async ({id, name, password}) => {
    try {
      const { data } = await api.put(`/users/${id}`, {name, password});
      const newUsers = users.map((item) => {
        if(item.id === id){
            item.name = name;
        }
        return item;
      });
        setUsers(newUsers);
      return true;
    } catch (error) {
      enqueueSnackbar(error.response.data.errors[0].msg, {
        variant: "error",
        autoHideDuration: "3000",
        anchorOrigin: {
          horizontal: "center",
          vertical: "top",
        },
      });
      return false;
    }
  };



  const handleClickLogout = () => {
    logout();
  };

 

  return (
    <ThemeProvider theme={defaultTheme}>
      
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AccessibilityIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Administrador
          </Typography>
          <Button
            style={{ right: 10, position: "absolute" }}
            color="inherit"
            variant="outlined"
            onClick={handleClickLogout}
          >
            Salir
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Gestionar Usuarios
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Puede crear, modificar y eliminar los usuarios del sistema.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <FormUser postUsers={postUsers} />
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {users.map((user) => (
              <CardUser key={user.id} user={user} deleteUser={deleteUser} updateUser={updateUser} />
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Centro de solidaridad para niños
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          San Antonio Huista, Huehuetenango.
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
