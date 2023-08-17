import { useState, useEffect } from "react";
import { ArrowUp } from "../svg/ArrowUp";
import { GmailColorido } from "../svg/GmailColorido";
import { LinkedinColorido } from "../svg/LinkedinColorido";

export const BotõesLaterais = () => {
  const [showIcons, setShowIcons] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = window.document.documentElement.scrollHeight * 0.1;
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    setShowIcons(currentScroll > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showIcons ? (
    <>
      <div
        className="fixed bottom-0 right-0 flex items-center justify-center w-[36px] h-[36px] rounded-[50%] bg-cyan-700 cursor-pointer mb-1 mr-1.5 z-10"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp width={24} height={24} />
      </div>
      <div className="flex flex-col gap-4 fixed bottom-2 left-0  w-[36px] h-[60px] cursor-pointer mb-1 ml-1.5 z-10">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alefigueiredogomes@gmail.com"
          target="_blank"
        >
          <GmailColorido width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexandre-gomes-165615286/"
          target="_blank"
        >
          <LinkedinColorido width={24} height={24} />
        </a>
      </div>
    </>
  ) : (
    <></>
  );
};
