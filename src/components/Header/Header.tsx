import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex items-center justify-between font-[inconsolata] font-bold h-20 bg-[#ECECEC] px-24 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">
      <img
        src="../../../public/logo/b1.png"
        alt="logo"
        className="w-14 h-14 opacity-[90%] shadow rounded"
      />
      <nav className="flex gap-5">
        <NavLink to="/">home</NavLink>
        <NavLink to="/projects">projetos</NavLink>
        <NavLink to="/projects">curriculo</NavLink>
      </nav>
    </div>
  );
};
