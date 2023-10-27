import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { AuthContext } from "../context/AuthContext";
import { AdmonPage } from "../pages/AdmonPage";
import { HomePage } from "../pages/HomePage";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  const { state } = useContext(AuthContext);

  if (state.status === "checking") {
    return <div></div>;
  }

  return (
    <>
      <Routes>
        {state.status === "authenticated" ? (
          state.user.id === "WzTGAe5JRhFahiUD" ? (
            <Route path="/*" element={<AdmonPage />} />
          ) : (
            <Route path="/*" element={<DashboardRoutes />} />
          )
        ) : (
          <Route path="/*" element={<LoginPage />} />
        )}
      </Routes>
    </>
  );
};
