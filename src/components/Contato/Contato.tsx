import { useState } from "react";
import { Gmail } from "../svg/Gmail";
import { GmailColorido } from "../svg/GmailColorido";
import { Linkedin } from "../svg/Linkedin";
import { LinkedinColorido } from "../svg/LinkedinColorido";

export const Contato = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showLinkedin, setShowLinkedin] = useState(false);
  return (
    <div className="flex flex-col gap-4 pt-12 pl-12 font-[metropolisregular] pl-1">
      <h3 className="text-5xl opacity-80">Entre em contato</h3>
      <div className="flex gap-24">
        <a
          className="relative w-min flex items-center cursor-pointer ml-[5px]"
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alefigueiredogomes@gmail.com"
          target="_blank"
          onMouseEnter={() => setShowEmail(true)}
          onMouseLeave={() => setShowEmail(false)}
        >
          <div
            className={`w-min absolute inset-0 ${
              showEmail ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500 ease-in-out`}
          >
            <Gmail />
          </div>
          <div
            className={`w-min absolute inset-0 ${
              showEmail ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 ease-in-out`}
          >
            <GmailColorido />
          </div>
        </a>
        <a
          className="relative w-min flex items-center cursor-pointer ml-[5px]"
          href="https://www.linkedin.com/in/alexandre-gomes-165615286/"
          target="_blank"
          onMouseEnter={() => setShowLinkedin(true)}
          onMouseLeave={() => setShowLinkedin(false)}
        >
          <div
            className={`w-min absolute inset-0 mt-2 ${
              showLinkedin ? "opacity-0" : "opacity-100"
            } transition-opacity duration-500 ease-in-out`}
          >
            <Linkedin width={65} height={65} />
          </div>
          <div
            className={`w-min absolute inset-0 mt-2 ${
              showLinkedin ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500 ease-in-out`}
          >
            <LinkedinColorido width={65} height={65} />
          </div>
        </a>
      </div>
    </div>
  );
};
