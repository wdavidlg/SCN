import React from "react";
import { Button, Grid } from "@mui/material";
import { GraficaTerapia } from "../components/GraficaTerapia";
import { TerapiaCard } from "../components/TerapiaCard";
import { ModalTerapia } from "../components/terapias/ModalTerapia";
import { useModalContext } from "../context/DialogContext";
import { useTerapiaContext } from "../context/TerapiaContext";
import { useRecordContext } from "../context/RecordContext";
import { useEffect } from "react";
import { ModalDeleteTerapia } from "../components/modal/ModalDeleteTerapia";
import { ModalTerapiaUpdate } from "../components/terapias/ModalTerapiaUpdate";

export const TerapiasPage = () => {

    const {modalTerapiaNuevo} = useModalContext();
    const {state, getAllByChild} = useTerapiaContext();
    const {state:{recordSelected}} = useRecordContext()

    useEffect(() => {
      if(!recordSelected) return
      getAllByChild(recordSelected.id)
    }, [recordSelected])


    const handleNuevo = () => {
        modalTerapiaNuevo.open()
    }   

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={2}
          style={{ display: "flex", alignItems: "center", marginBottom: 20 }}
        >
          <Button
            style={{ maxWidth: 200 }}
            variant="contained"
            color="secondary"
            onClick={handleNuevo}
          >
            Ingresar Terapia
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={10}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          {
            (state.terapias && state.terapias.length > 0) && (
              <>
                <GraficaTerapia data={state.terapias.slice().reverse()} />
              </>
            )
          }
          
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"}>
          {
            state.terapias && (
              state.terapias.map(item => (
                <Grid item xs={12}  md={6} lg={4} style={{padding: 10}} key={item.id}>
                  <TerapiaCard terapia={item} />
                </Grid>
              ))
            )
          }
      </Grid>
      
      <ModalTerapia />
      <ModalDeleteTerapia />
      <ModalTerapiaUpdate />
    </>
  );
};
