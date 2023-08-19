import { Moon } from "../svg/Moon";
import { Sun } from "../svg/Sun";

type NightModeProps = {
  changeTheme: () => void;
  width: number;
  height: number;
  theme: "light" | "dark";
};

export const NightMode = (props: NightModeProps) => {
  return (
    <div
      className="w-min flex items-center gap-1 cursor-pointer"
      onClick={props.changeTheme}
    >
      <div
        className={`${
          props.theme === "light"
            ? "opacity-100"
            : "opacity-50"
        } transition-opacity duration-300`}
      >
        <Sun width={props.width} height={props.height} />
      </div>
      <span>|</span>
      <div
        className={`${
          props.theme === "dark"
            ? "opacity-100"
            : "opacity-50"
        } transition-opacity duration-300`}
      >
        <Moon width={props.width} height={props.height} />
      </div>
    </div>
  );
};
