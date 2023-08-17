import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { HomeContent } from "./pages/Home/HomeContent";
import { ArrowUp } from "./components/svg/ArrowUp";

function App() {
  return (
    <div className="grid grid-rows-[50px_1fr]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
        </Routes>
      </BrowserRouter>
      <ArrowUp />
    </div>
  );
}

export default App;
