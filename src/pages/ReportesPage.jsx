import React, { useState } from "react";
import {PDFDownloadLink} from "@react-pdf/renderer";
import { Button, Grid, Typography } from "@mui/material";
import { ReporteTabla } from "../components/reportes/ReporteTabla";
import { useRecordContext } from "../context/RecordContext";
import { calcularEdad } from "../helpers/utils";

export const ReportesPage = () => {
  const [opcion, setOpcion] = useState("");
  const {state:{records}} = useRecordContext();

  return (
    <>
      <Typography textAlign={"center"} fontWeight={"bold"}>
        GENERAR REPORTE
      </Typography>
      <Grid container>
        <Grid xs={12} item style={{display:"flex", flexDirection: "row", justifyContent: "center", gap: 30, marginTop: 30}}>
          <Button color="primary" variant="contained" onClick={() => setOpcion("menor")}>
            Menor de edad
          </Button>
          <Button color="primary" variant="contained" onClick={() => setOpcion("mayor")}>
            Mayor de edad
          </Button>
          <Button color="primary" variant="contained" onClick={() => setOpcion("completo")}>
            Completo
          </Button>
        </Grid>
        <Grid xs={12} item>
          <Contenido opcion={opcion} personas={records} />
        </Grid>
      </Grid>

      
    </>
  );
};


const Contenido = ({opcion, personas}) => {

  if(opcion === "menor"){

    const lista = personas.filter(persona => calcularEdad(persona.birthDate) < 18)

    return (
      <PDFDownloadLink document={<ReporteTabla personas={lista} titulo={"MENORES DE EDAD"} />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Cargando Documento" : "Descargar Ahora"
        }
      </PDFDownloadLink> 
    )
  }

  if(opcion === "mayor"){

    const lista = personas.filter(persona => calcularEdad(persona.birthDate) >= 18)

    return (
      <PDFDownloadLink document={<ReporteTabla personas={lista} titulo={"MAYORES DE EDAD"} />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Cargando Documento" : "Descargar Ahora"
        }
      </PDFDownloadLink>
    )
  }

  if(opcion === "completo"){
    return (
      <PDFDownloadLink document={<ReporteTabla personas={personas} titulo={"LISTA COMPLETA"} />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Cargando Documento" : "Descargar Ahora"
        }
      </PDFDownloadLink>
    )
  }

  return (
    <div></div>
  )
}
