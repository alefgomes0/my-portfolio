import { CSSColorido } from "../../components/svg/CSS";
import { GitColorido } from "../../components/svg/Git";
import { HTML } from "../../components/svg/HTML";
import { JavaScript } from "../../components/svg/JavaScript";
import { ReactColorido } from "../../components/svg/ReactColorido";
import { TailwindColorido } from "../../components/svg/Tailwind";
import { TypeScriptColorido } from "../../components/svg/TypeScript";

export const TodosProjetos = () => {
  return (
    <div className="dark:text-neutral-100 dark:bg-neutral-900 bg-neutral-100 font-[metropolisregular] grid grid-cols-1 grid-rows-[auto_1fr] gap-2 pt-24 relative">
      <h2 className="dark:text-neutral-50 font-[metropolisbold] opacity-80 text-4xl md:text-6xl px-8 md:px-24 mb-8">
        Meus Projetos
      </h2>
      <div className="grid grid-cols-1 grid-rows-[min-height_min-height_min-height_auto] gap-x-8 gap-y-16 mt-4">
        <div className="dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-2xl md:text-3xl">
            LIVRARIA
          </h3>
          <div className="h-fit">
            <a
              href="https://shopping-cart-psi-seven.vercel.app/"
              target="_blank"
            >
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/sc.png 600w,
                  /imagens/sc-s.png 300w
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <ReactColorido width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
              Site com design responsivo que utiliza uma base de dados em
              arquivo{" "}
              <span className="font-[metropolisbold] dark:text-white">
                .json{" "}
              </span>
              localizada na própria pasta do projeto para exibir os livros. É
              possível filtrar por nome ou gênero, adicionar/remover do carrinho
              de compras e visualizar os itens em uma página para finalizar o
              pagamento. Os principais hooks do React foram utilizados no
              projeto, como{" "}
              <span className="font-[metropolisbold] dark:text-white">
                useState
              </span>
              ,{" "}
              <span className="font-[metropolisbold] dark:text-white">
                useEffect
              </span>
              ,{" "}
              <span className="font-[metropolisbold] dark:text-white">
                useRef
              </span>
              ,{" "}
              <span className="font-[metropolisbold] dark:text-white">
                useContext
              </span>{" "}
              e até mesmo um{" "}
              <span className="font-[metropolisbold]">hook personalizado</span>{" "}
              para armazenar os livros escolhidos em local storage.
            </h5>
          </div>
        </div>
        <div className="dark:bg-zinc-800 bg-slate-200 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            ONG AMBIENTAL
          </h3>
          <div className="h-fit">
            <a href="https://trees-lilac.vercel.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/trees.png 600w,
                  /imagens/trees-s.png 300w
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <ReactColorido width={60} height={60} />
              <TailwindColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
              O site, com temática inspirada em uma ONG que ajuda a combater
              queimadas, conta com algumas funcionalidades. Por um lado, ele
              consome duas{" "}
              <span className="font-[metropolisbold] dark:text-white">
                API's
              </span>{" "}
              diferentes para gerar um mapa com as localizações dos últimos
              incêndios florestais registrados. Além disso, conta com uma página
              de notícias, com conteúdo lorem ipsum, para mostrar diferentes
              estilizações de texto. Feito com Tailwind, o site é responsivo e
              utiliza as principais funcionalidades do React para estruturar o
              layout, além da biblioteca{" "}
              <span className="font-[metropolisbold] dark:text-white">
                axios
              </span>{" "}
              e promessas/catch para fazer o get request.
            </h5>
          </div>
        </div>
        <div className="dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            RESTAURANTE
          </h3>
          <div className="h-fit">
            <a href="https://restaurant-page-eight.vercel.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/rp.png 600w,
                  /imagens/rp-s.png 300w
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <ReactColorido width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
              Projeto feito para solidificar os conhecimentos adquiridos até
              então. Implementa alguns padrões básicos do front-end como{" "}
              <span className="font-[metropolisbold] dark:text-white">
                carrossel de imagens
              </span>
              ,{" "}
              <span className="font-[metropolisbold] dark:text-white">
                transições
              </span>{" "}
              e <span className="font-[metropolisbold]">animações</span>. Em
              termos visuais, a tentativa foi de criar um design simples,
              responsivo e elegante com a temática de um restaurante de frutos
              do mar. Conceitos de React como{" "}
              <span className="font-[metropolisbold] dark:text-white">
                props
              </span>{" "}
              e{" "}
              <span className="font-[metropolisbold] dark:text-white">
                hooks
              </span>{" "}
              foram utilizados em todo o projeto.
            </h5>
          </div>
        </div>
        <div className="dark:bg-zinc-800 bg-slate-200 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            Gerador de Currículo
          </h3>
          <div className="h-fit">
            <a href="https://cv-seven-ebon.vercel.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/cv.png 600w,
                  /imagens/cv-s.png 300w
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <ReactColorido width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <JavaScript width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
          </div>
        </div>
        <div className="dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            Jogo da Memória
          </h3>
          <div className="h-fit">
            <a href="https://memory-card-five-zeta.vercel.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/mc.png 600w,
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <ReactColorido width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <JavaScript width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
          </div>
        </div>
        <div className="dark:bg-zinc-800 bg-slate-200 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            Lista de Afazeres
          </h3>
          <div className="h-fit">
            <a href="https://illustrious-churros-02bc2b.netlify.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/td.png 600w,
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <HTML width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <JavaScript width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
              Projeto antigo e não responsivo.
            </h5>
          </div>
        </div>
        <div className="dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            Painel de Administrador
          </h3>
          <div className="h-fit">
            <a href="https://restaurant-page-eight.vercel.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/ad.png 600w,
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <HTML width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <JavaScript width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
              Projeto antigo e não responsivo.
            </h5>
          </div>
        </div>
        <div className="dark:bg-zinc-800 bg-slate-200 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            Etch a Sketch
          </h3>
          <div className="h-fit">
            <a href="https://illustrious-churros-02bc2b.netlify.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/et.png 600w,
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <HTML width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <JavaScript width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
              Projeto antigo e não responsivo.
            </h5>
          </div>
        </div>
        <div className="dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            Formulário de Inscrição
          </h3>
          <div className="h-fit">
            <a href="https://mellow-wisp-41dcac.netlify.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/su.png 600w,
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <HTML width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <JavaScript width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
              Projeto antigo e não responsivo.
            </h5>
          </div>
        </div>
        <div className="dark:bg-zinc-800 bg-slate-200 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            Calculator
          </h3>
          <div className="h-fit">
            <a href="https://jolly-frangipane-d3acf9.netlify.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/cc.png 600w,
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <HTML width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <JavaScript width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
              Projeto antigo e não responsivo.
            </h5>
          </div>
        </div>
        <div className="dark:bg-neutral-800 grid grid-cols-1 md:grid-cols-2 grid-rows-[auto_1fr] gap-x-2 md:gap-x-8 gap-y-2 bg-neutral-50 px-8 md:px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            Jogo da Velha
          </h3>
          <div className="h-fit">
            <a href="https://silver-starlight-3d47e3.netlify.app/" target="_blank">
              <img
                className="min-h-[140px] min-w-[280px] object-center object-cover rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]"
                srcSet="
                  /imagens/tc.png
                "
              />
            </a>
          </div>
          <div className="flex flex-col self-start md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <HTML width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <JavaScript width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
              Projeto antigo e não responsivo.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
