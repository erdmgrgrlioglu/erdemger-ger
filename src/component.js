import React from "react";
import { useTranslation } from "react-i18next";

function MyComponenet() {
  const { t } = useTranslation();
  return <div>{t("localization_testing")}</div>;
}

export default MyComponenet;

<>
  <License />
  <Navbar />
  <Console />
  <Routes>
    <Route path="/" element={<></>} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/simulation" element={<SimulationPage />} />
  </Routes>
  <Footer />
</>;

import { Routes, Route } from "react-router-dom";

import { Console, AboutPage, ProjectsPage, SimulationPage } from "./pages";
import { Navbar, Footer } from "./components";
import License from "./License";
