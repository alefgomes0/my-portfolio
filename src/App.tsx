import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { HomeContent } from "./pages/HomeContent";
import { Projetos } from "./components/Projetos/Projetos";
import { IconesTecnologia } from "./components/IconesTecnologia/IconesTecnologia";

function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-rows-[80px_1fr]">
        <IconesTecnologia />
      </div>
    </BrowserRouter>
  );
}

export default App;
