import { Contato } from "../Contato/Contato";
import { IconesTecnologia } from "../IconesTecnologia/IconesTecnologia";
import { VisiteGitHub } from "../VisiteGitHub/VisiteGitHub";

export const Apresentacao = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-x-8 sm:gap-x-24 mx-8 md:mx-24 sm:mr-24 my-14 bg-neutral-100 rounded">
      <div className="flex flex-col gap-2 col-start-1 col-end-2 row-start-1 row-end-2 p-4">
        <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-[inconsolata] opacity-80">hello, world</h2>
        <h4 className="text-xs sm:text-sm sm:text-lg font-[metropolislight]">
          Meu nome é Alexandre Figueiredo Gomes. Sou um desenvolvedor{" "}
          <span className="font-[metropolisbold]">front end</span> (estudando
          para me tornar full-stack). Advogado por formação e apaixonado por
          tecnologia, encontrei na programação uma oportunidade de realização
          pessoal e profissional. Como programador front-end, meu objetivo é
          fornecer a melhor experiência possível aos usuários, com especial foco
          à interface, experiência do usuário e melhores práticas.
        </h4>
      </div>
      <IconesTecnologia />
      <Contato />
      <VisiteGitHub />
    </div>
  );
};
