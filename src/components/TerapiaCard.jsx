import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useModalContext } from "../context/DialogContext";
import { useTerapiaContext } from "../context/TerapiaContext";

export function TerapiaCard({terapia}) {

  const {modalTerapiaDelete, modalTerapiaUpdate} = useModalContext();
  const {select} = useTerapiaContext();

  const handleDelete = () => {
    modalTerapiaDelete.open()
    select(terapia);
  }

  const handleUpdate = () => {
    select(terapia);
    modalTerapiaUpdate.open()
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Rating
          name="customized-10"
          max={10}
          value={Number(terapia.evaluation)}
        />
        <p style={{marginLeft: 2}}>({terapia.evaluation})</p>
      </div>
      <CardContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <DateRangeIcon sx={{ marginRight: 1, fontSize: 20 }} />
            {terapia.date}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <AccessTimeIcon sx={{ marginRight: 1, fontSize: 20 }} />
            {terapia.duration} min
          </Typography>
        </div>
        <Typography gutterBottom variant="h6" component="div">
          {terapia.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight={"bold"}>
          Objetivo
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {terapia.objetive}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={"bold"}
          style={{ marginTop: 10 }}
        >
          Observación
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {terapia.observation}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleUpdate}>Editar</Button>
        <Button size="small" color="error" onClick={handleDelete}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}
