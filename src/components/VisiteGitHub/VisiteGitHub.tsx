import { useState } from "react";
import { Github1 } from "../svg/Github1";
import { Github2 } from "../svg/Github2";

export const VisiteGitHub = () => {
  const [github, showGithub] = useState(false);
  const isDesktop = window.innerWidth > 770;

  return isDesktop ? (
    <div className="flex flex-col gap-4 pt-6 pl-8 font-[metropolisregular] pl-1">
      <h3 className="text-5xl font-[metropolisregular] opacity-80">
        Visite meu GitHub
      </h3>
      <a
        className="relative w-min flex items-center cursor-pointer ml-[5px]"
        href="https://github.com/alefgomes0"
        target="_blank"
        onMouseEnter={() => showGithub(true)}
        onMouseLeave={() => showGithub(false)}
      >
        <div
          className={`w-min absolute inset-0 ${
            github ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500 ease-in-out`}
        >
          <Github1 width={80} height={80} />
        </div>
        <div
          className={`w-min absolute inset-0 ${
            github ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500 ease-in-out`}
        >
          <Github2 width={80} height={80} />
        </div>
      </a>
    </div>
  ) : (
    <div className="flex flex-col gap-4 font-[metropolisregular] p-4 pl-[26px]">
      <h3 className="text-2xl sm:text-4xl md:text-6xl font-[metropolisregular] opacity-80">
        Visite meu GitHub
      </h3>
      <a href="https://github.com/alefgomes0" target="_blank">
        <Github2 width={40} height={40} />
      </a>
    </div>
  );
};
