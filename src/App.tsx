import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Header } from "./components/Header/Header";
import { HomeContent } from "./pages/Home/HomeContent";
import { Projetos } from "./components/Projetos/Projetos";
import { IconesTecnologia } from "./components/IconesTecnologia/IconesTecnologia";

function App() {
  return (
    <div className="grid grid-rows-[50px_1fr]">
      <BrowserRouter>
        <Header />
        <Projetos />
        <Routes>
          <Route path="/" element={<HomeContent />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
