import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { HomeContent } from "./pages/Home/HomeContent";

function App() {
  return (
    <div className="grid grid-rows-[50px_1fr]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
