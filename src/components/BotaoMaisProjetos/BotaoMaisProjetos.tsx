import { Link } from "react-router-dom";

export const BotaoMaisProjetos = () => {
  return (
    <Link to="/projetos">
      <button
        className="text-xl text-slate-50 ml-8 mb-8 md:ml-24 bg-cyan-600 px-4 py-1 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.25)_inset]"
        onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
      >
        VER MAIS PROJETOS
      </button>
    </Link>
  );
};
