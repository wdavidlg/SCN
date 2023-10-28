import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import { useRecordContext } from "../context/RecordContext";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { FormBuscar } from "../components/FormBuscar";
import myImage from "../assets/logo.jpeg";
import { calcularEdad } from "../helpers/utils";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModalContext } from "../context/DialogContext";
import { ModalDelete } from "../components/modal/ModalDelete";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { ReporteIndividual } from "../components/reportes/Reportes";

export const VerPage = () => {
  const {
    state: { recordSelected: rs },
  } = useRecordContext();
  const { modalDelete } = useModalContext();

  const navigate = useNavigate();
  const [descargar, setdescargar] = useState(false);

  useEffect(() => {
    setdescargar(false);
  }, [rs]);

  const handleUpdate = () => {
    navigate("/actualizar");
  };

  const handleDelete = () => {
    console.log("open");
    modalDelete.open();
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            minHeight: 200,
            alignItems: "center",
          }}
        >
          {!rs ? (
            <PersonSearchIcon color="primary" sx={{ fontSize: 100 }} />
          ) : (
            <Card sx={{ width: "90%" }}>
              <CardContent>
                <Grid container>
                  <Grid container>
                    <Grid
                      item
                      xs={4}
                      style={{
                        padding: 50,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        style={{ width: "100%" }}
                        src={myImage}
                        title="Logo"
                      />
                    </Grid>
                    <Box xs={8}>
                      {/* <Typography variant="body2" color="GrayText">
                      Paciente
                    </Typography> */}
                      <Typography>
                        Nombre: <strong>{rs.name}</strong>
                      </Typography>
                      <Typography>
                        Apellido: <strong>{rs.lastName}</strong>
                      </Typography>
                      <Typography>
                        Edad: <strong>{calcularEdad(rs.birthDate)}</strong>
                      </Typography>
                      <Typography>
                        Responsable: <strong>{rs.nameResponsible}</strong>
                      </Typography>
                      <Typography>
                        Estado Civil: <strong>{rs.civilState}(a)</strong>
                      </Typography>
                      <Typography>
                        Direccion: <strong>{rs.address}</strong>
                      </Typography>
                      <Typography>
                        Telefono: <strong>{rs.phoneNumber}</strong>
                      </Typography>
                      <br />
                      <Typography>
                        Diagnostico Médico: <strong>{rs.diagnostic}</strong>
                      </Typography>
                      <Typography>
                        Tipo de atención: <strong>{rs.atention}</strong>
                      </Typography>
                      <Typography>
                        Duración: <strong>{rs.duration}</strong>
                      </Typography>
                      <Typography>
                        Necesita Operación:{" "}
                        <strong>{rs.needOperation?.toUpperCase()}</strong>
                      </Typography>
                      <Typography>
                        Necesita Medicina:{" "}
                        <strong>{rs.needMedicament?.toUpperCase()}</strong>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 20,
                  }}
                >
                  <Button
                    style={{ width: 200 }}
                    variant="contained"
                    onClick={() => setdescargar(true)}
                  >
                    GENERAR PDF
                  </Button>

                  <div>
                    <IconButton onClick={handleUpdate} aria-label="update">
                      <EditIcon color="secondary" style={{ fontSize: 30 }} />
                    </IconButton>
                    <IconButton onClick={handleDelete} aria-label="delete">
                      <DeleteIcon style={{ fontSize: 30, color: "red" }} />
                    </IconButton>
                  </div>
                </Grid>
                {descargar && (
                  <Grid item>
                    <PDFDownloadLink
                      document={<ReporteIndividual record={rs} />}
                      fileName="somename.pdf"
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? "Cargando Documento" : "Descargar Ahora"
                      }
                    </PDFDownloadLink>
                  </Grid>
                )}
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>

      <ModalDelete />
    </>
  );
};
