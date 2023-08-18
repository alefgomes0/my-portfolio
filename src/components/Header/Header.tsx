import { NavLink } from "react-router-dom";
import { NightMode } from "../NightMode/NightMode";

type HeaderProps = {
  changeTheme: () => void
}

export const Header = (props: HeaderProps) => {
  return (
    <header className="row-start-1 row-end-2 h-[50px] flex items-center justify-between font-[inconsolata] font-semibold h-20 bg-neutral-50 px-8 md:px-24 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]">
      <img
        src="/logo/b1.png"
        alt="logo"
        className="w-8 h-8 opacity-[90%] shadow rounded"
      />
      <nav className="flex gap-4 text-xs md:text-base">
        <NavLink
          to="/"
          className="hover:underline decoration-cyan-700 underline-offset-4"
        >
          home
        </NavLink>
        <NavLink
          to="/projetos"
          className="hover:underline decoration-cyan-700 underline-offset-4"
        >
          projetos
        </NavLink>
        <NightMode changeTheme={props.changeTheme} width={18} height={18}/>
      </nav>
    </header>
  );
};
