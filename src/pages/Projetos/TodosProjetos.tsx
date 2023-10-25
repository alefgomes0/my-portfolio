import { CSSColorido } from "../../components/svg/CSS";
import { GitColorido } from "../../components/svg/Git";
import { HTML } from "../../components/svg/HTML";
import { JavaScript } from "../../components/svg/JavaScript";
import { ReactColorido } from "../../components/svg/ReactColorido";
import { ProjetosHome } from "../../components/ProjetosHome/ProjetosHome";
import { Projeto } from "../../components/Projeto/Projeto";

export const TodosProjetos = () => {
  return (
    <section className="dark:text-neutral-100 dark:bg-neutral-900 bg-neutral-100 font-[metropolisregular] grid grid-cols-1 grid-rows-[auto_1fr] gap-2 pt-24 relative">
      <h2 className="dark:text-neutral-50 font-[metropolisbold] opacity-80 text-4xl md:text-6xl px-8 md:px-24 mb-8">
        Meus Projetos
      </h2>
      <ProjetosHome />
      <Projeto
        title="Gerador de Currículo"
        imagePath="/imagens/cv"
        projectLink="https://cv-seven-ebon.vercel.app/"
        children={
          <>
            <ReactColorido width={60} height={60} />
            <CSSColorido width={60} height={60} />
            <JavaScript width={60} height={60} />
            <GitColorido width={60} height={60} />
          </>
        }
        textContent=""
      />
      <Projeto
        title="Jogo da Memória"
        imagePath="/imagens/mc"
        projectLink="https://memory-card-five-zeta.vercel.app/"
        children={
          <>
            <ReactColorido width={60} height={60} />
            <CSSColorido width={60} height={60} />
            <JavaScript width={60} height={60} />
            <GitColorido width={60} height={60} />
          </>
        }
        textContent=""
      />
      <Projeto
        title="Lista de Afazeres"
        imagePath="/imagens/td"
        projectLink="https://illustrious-churros-02bc2b.netlify.app/"
        children={
          <>
            <HTML width={60} height={60} />
            <CSSColorido width={60} height={60} />
            <JavaScript width={60} height={60} />
            <GitColorido width={60} height={60} />
          </>
        }
        textContent="Projeto antigo e não responsivo"
      />
      <Projeto
        title="Painel de Administrador"
        imagePath="/imagens/ad"
        projectLink="https://restaurant-page-eight.vercel.app/"
        children={
          <>
            <HTML width={60} height={60} />
            <CSSColorido width={60} height={60} />
            <JavaScript width={60} height={60} />
            <GitColorido width={60} height={60} />
          </>
        }
        textContent="Projeto antigo e não responsivo"
      />
      <Projeto
        title="Etch a Sketch"
        imagePath="/imagens/et"
        projectLink="https://illustrious-churros-02bc2b.netlify.app/"
        children={
          <>
            <HTML width={60} height={60} />
            <CSSColorido width={60} height={60} />
            <JavaScript width={60} height={60} />
            <GitColorido width={60} height={60} />
          </>
        }
        textContent="Projeto antigo e não responsivo"
      />
      <Projeto
        title="Formulário	 de Inscrição"
        imagePath="/imagens/su"
        projectLink="https://mellow-wisp-41dcac.netlify.app/"
        children={
          <>
            <HTML width={60} height={60} />
            <CSSColorido width={60} height={60} />
            <JavaScript width={60} height={60} />
            <GitColorido width={60} height={60} />
          </>
        }
        textContent="Projeto antigo e não responsivo"
      />
      <Projeto
        title="Calculadora"
        imagePath="/imagens/cc"
        projectLink="https://jolly-frangipane-d3acf9.netlify.app/"
        children={
          <>
            <HTML width={60} height={60} />
            <CSSColorido width={60} height={60} />
            <JavaScript width={60} height={60} />
            <GitColorido width={60} height={60} />
          </>
        }
        textContent="Projeto antigo e não responsivo"
      />
      <Projeto
        title="Calculadora"
        imagePath="/imagens/tc"
        projectLink="https://silver-starlight-3d47e3.netlify.app/"
        children={
          <>
            <HTML width={60} height={60} />
            <CSSColorido width={60} height={60} />
            <JavaScript width={60} height={60} />
            <GitColorido width={60} height={60} />
          </>
        }
        textContent="Projeto antigo e não responsivo"
      />
    </section>
  );
};
