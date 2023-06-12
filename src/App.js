import { Routes, Route } from "react-router-dom";

import { Console, AboutPage, ProjectsPage, SimulationPage } from "./pages";
import { Navbar, Footer } from "./components";

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
      <Footer />
    </>
  );
}
