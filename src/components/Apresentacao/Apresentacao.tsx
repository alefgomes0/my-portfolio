import { IconesTecnologia } from "../IconesTecnologia/IconesTecnologia";

export const Apresentacao = () => {
  return (
    <div className="row-start-2 row-end-2 bg-slate-200">
      <div className="grid grid-cols-2 grid-rows-2 ml-[91px] mr-24 my-10 bg-slate-100 rounded">
        <div className="flex flex-col gap-2 col-start-1 col-end-2 row-start-1 row-end-2 p-4">
          <h2 className="text-8xl font-[inconsolata] opacity-80">
            hello, world
          </h2>
          <h4 className="text-lg font-[metropolislight]">
            Meu nome é Alexandre Figueiredo Gomes. Sou um desenvolvedor{" "}
            <span className="font-[metropolisbold]">front-end</span> (estudando
            para me tornar full-stack). Advogado por formação e apaixonado por
            tecnologia, encontrei na programação uma oportunidade de realização
            pessoal e profissional. Como programador front-end, meu objetivo é
            fornecer a melhor experiência possível aos usuários, com especial
            foco à interface, experiência do usuário e melhores práticas.
          </h4>
        </div>
        <IconesTecnologia />
      </div>
    </div>
  );
};
