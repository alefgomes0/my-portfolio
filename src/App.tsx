import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomeContent } from "./pages/Home/HomeContent";
import { Footer } from "./components/Footer/Footer";
import { BotõesLaterais } from "./components/BotõesLaterais/BotõesLaterais";
import { TodosProjetos } from "./pages/Projetos/TodosProjetos";
import "./App.css";
import { NoMatch } from "./pages/NoMatch/NoMatch";
import axios from "axios";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const wakeUpServer = async () => {
      await axios.get("https://where-is-waldo-dcr7.onrender.com");
    };
    void wakeUpServer();
  }, []);

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <div className="grid grid-rows-[50px_1fr]">
      <BrowserRouter>
        <Header changeTheme={handleThemeChange} theme={theme} />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/projetos" element={<TodosProjetos />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
      <BotõesLaterais />
      <Footer />
    </div>
  );
}

export default App;
