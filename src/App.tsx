import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { HomeContent } from "./pages/Home/HomeContent";
import { Footer } from "./components/Footer/Footer";
import { BotõesLaterais } from "./components/BotõesLaterais/BotõesLaterais";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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
        </Routes>
      </BrowserRouter>
      <BotõesLaterais />
      <Footer />
    </div>
  );
}

export default App;
