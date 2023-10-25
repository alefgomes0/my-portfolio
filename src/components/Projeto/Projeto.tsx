import { useState } from "react";

type ProjetoProps = {
  title: string;
  imagePath: string;
  children: React.ReactNode;
  textContent: React.ReactNode;
  projectLink: string;
};

export const Projeto = ({
  title,
  children,
  imagePath,
  textContent,
  projectLink,
}: ProjetoProps) => {
  const [zoomIn, setZoomIn] = useState(false);

  return (
    <div className="dark:odd:bg-[#1f1f1f] dark:even:bg-[#333] odd:bg-slate-200 even:bg-neutral-50 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 px-8 md:px-24 py-8">
      <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-2xl md:text-3xl">
        {title}
      </h3>
      <div className="h-fit">
        <a href={projectLink} target="_blank">
          <div className="overflow-hidden">
            <img
              onMouseEnter={() => setZoomIn(true)}
              onMouseLeave={() => setZoomIn(false)}
              className={`min-h-[140px] min-w-[280px] object-center object-cover ${
                zoomIn ? "scale-110" : ""
              } transition-transform duration-300 ease-in-out rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]`}
              srcSet={`
                ${imagePath}.png 600w,
                ${imagePath}-s.png 300w
              `}
            />
          </div>
        </a>
      </div>
      <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
        <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
        <div className="flex flex-wrap gap-6">{children}</div>
        {textContent}
      </div>
    </div>
  );
};
