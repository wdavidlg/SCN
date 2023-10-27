import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { ModalDelete } from "./ModalDelete";
import { ModalUpdate } from "./ModalUpdate";

export const CardUser = ({ user, deleteUser, updateUser }) => {
  const [open, setOpen] = useState(false);

  const [openUpdate, setOpenUpdate] = useState(false);

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item key={user.id} xs={12} sm={6} md={4}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <PersonIcon fontSize="large" />
          <Typography gutterBottom variant="h5" component="h2">
            {user.name}
          </Typography>
          {
            user.id === "WzTGAe5JRhFahiUD" ? (
              <Typography fontWeight={"bold"}>Administrador</Typography>
            ):(
              <Typography>Usuario del sistema.</Typography>
            )
          }
          
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClickOpenUpdate}>
            Editar
          </Button>

          {!(user.id === "WzTGAe5JRhFahiUD") && (
            <Button size="small" color="error" onClick={handleClickOpen}>
              Eliminar
            </Button>
          )}
        </CardActions>
      </Card>
      <ModalDelete
        user={user}
        open={open}
        handleClose={handleClose}
        deleteUser={deleteUser}
      />
      <ModalUpdate
        open={openUpdate}
        user={user}
        handleClose={handleCloseUpdate}
        updateUser={updateUser}
      />
    </Grid>
  );
};
