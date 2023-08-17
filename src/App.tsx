import { useState, useEffect } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { HomeContent } from "./pages/Home/HomeContent";
import { Footer } from "./components/Footer/Footer";
import { BotõesLaterais } from "./components/BotõesLaterais/BotõesLaterais";

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 770);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="grid grid-rows-[50px_1fr]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent isDesktop={isDesktop}/>} />
        </Routes>
      </BrowserRouter>
      <BotõesLaterais />
      <Footer />
    </div>
  );
}

export default App;
