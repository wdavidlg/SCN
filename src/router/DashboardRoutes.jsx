import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ListadoPage } from "../pages/ListadoPage";
import { NavBar } from "../components/NavBar";
import { RegistrarPage } from "../pages/RegistrarPage";
import { VerPage } from "../pages/VerPage";
import { ActualizarPage } from "../pages/ActualizarPage";
import { ReportesPage } from "../pages/ReportesPage";

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar>
        <Routes>
          <Route path="ver" element={<VerPage />} />
          <Route path="actualizar" element={<ActualizarPage />} />
          <Route path="registrar" element={<RegistrarPage />} />
          <Route path="listado" element={<ListadoPage />} />
          <Route path="reportes" element={<ReportesPage/>} />
          <Route path="/*" element={<Navigate to={"listado"} />} />
        </Routes>
      </NavBar>
    </>
  );
};
