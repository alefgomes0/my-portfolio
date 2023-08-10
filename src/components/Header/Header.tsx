import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="row-start-1 row-end-2 h-[50px] flex items-center justify-between font-[inconsolata] font-semibold h-20 bg-slate-50 px-24 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">
      <img
        src="../../../public/logo/b1.png"
        alt="logo"
        className="w-8 h-8 opacity-[90%] shadow rounded"
      />
      <nav className="flex gap-5 ">
        <NavLink
          to="/"
          className="hover:underline decoration-cyan-700 underline-offset-4"
        >
          home
        </NavLink>
        <NavLink
          to="/projects"
          className="hover:underline decoration-cyan-700 underline-offset-4"
        >
          projetos
        </NavLink>
        <NavLink
          to="/projects"
          className="hover:underline decoration-cyan-700 underline-offset-4"
        >
          curriculo
        </NavLink>
      </nav>
    </div>
  );
};
