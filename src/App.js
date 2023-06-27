import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Console, AboutPage, ProjectsPage, SimulationPage } from "./pages";
import { Navbar, Footer } from "./components";
import License from "./License";

import "./App.module.scss";

export default function App() {
  return (
    <>
      <License />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Console />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/simulation" element={<SimulationPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
