import { Routes, Route } from "react-router-dom";

import Console from "./pages/Console";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import SimulationPage from "./pages/Simulation";
import Navbar from "./components/Navbar";

import "./App.module.scss";

export default function App() {
  return (
    <>
      <Navbar />
      <Console id="home" />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/simulation" element={<SimulationPage />} />
      </Routes>
    </>
  );
}
