import { Link } from "react-router-dom";
import { CSSColorido } from "../svg/CSS";
import { GitColorido } from "../svg/Git";
import { ReactColorido } from "../svg/ReactColorido";
import { TailwindColorido } from "../svg/Tailwind";
import { TypeScriptColorido } from "../svg/TypeScript";

export const Projetos = () => {
  return (
    <div className="font-[metropolisregular] grid grid-cols-1 grid-rows-[auto_1fr] gap-2 pt-24 isolate relative after:absolute after:content-[''] after:inset-0 after:bg-neutral-300 after:skew-y-[-5deg] after:z-[-1]">
      <h2 className="font-[metropolisbold] opacity-80 text-6xl px-24 mb-8">
        Meus Projetos
      </h2>
      <div className="grid grid-cols-1 grid-rows-[1fr_1fr_1fr_auto] gap-x-8 gap-y-16 mt-4">
        <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-x-8 gap-y-2 bg-slate-200 px-24 py-8">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            LIVRARIA
          </h3>
          <div className="row-start-2 row-end-3 col-start-1 col-end-2 w-full h-full shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]">
            <a
              href="https://shopping-cart-psi-seven.vercel.app/"
              target="_blank"
            >
              <img
                className="object-center object-cover rounded"
                srcSet="
                    /imagens/sc.png 600w,
                    /imagens/sc-s.png 300w
                  "
              />
            </a>
          </div>
          <div className="flex flex-col col-start-2 col-end-3 row-start-1 row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <ReactColorido width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight]">
              Site com design responsivo que utiliza uma base de dados em
              arquivo <span className="font-[metropolisbold]">.json </span>
              localizada na própria pasta do projeto para exibir os livros. É
              possível filtrar por nome ou gênero, adicionar/remover do carrinho
              de compras e visualizar os itens em uma página para finalizar o
              pagamento. Os principais hooks do React foram utilizados no
              projeto, como{" "}
              <span className="font-[metropolisbold]">useState</span>,{" "}
              <span className="font-[metropolisbold]">useEffect</span>,{" "}
              <span className="font-[metropolisbold]">useRef</span>,{" "}
              <span className="font-[metropolisbold]">useContext</span> e até
              mesmo um{" "}
              <span className="font-[metropolisbold]">hook personalizado</span>{" "}
              para armazenar os livros escolhidos em local storage.
            </h5>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-x-8 gap-y-2 px-24">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            ONG AMBIENTAL
          </h3>
          <div className="row-start-2 row-end-3 col-start-1 col-end-2 w-full h-full shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]">
            <a href="https://trees-lilac.vercel.app/" target="_blank">
              <img
                className="object-center object-cover rounded"
                srcSet="
                    /imagens/trees.png 600w,
                    /imagens/trees-s.png 300w
                  "
              />
            </a>
          </div>
          <div className="flex flex-col col-start-2 col-end-3 row-start-1 row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <ReactColorido width={60} height={60} />
              <TailwindColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight]">
              O site, com temática inspirada em uma ONG que ajuda a combater
              queimadas, conta com algumas funcionalidades. Por um lado, ele
              consome duas <span className="font-[metropolisbold]">API's</span>{" "}
              diferentes para gerar um mapa com as localizações dos últimos
              incêndios florestais registrados. Além disso, conta com uma página
              de notícias, com conteúdo lorem ipsum, para mostrar diferentes
              estilizações de texto. Feito com Tailwind, o site é responsivo e
              utiliza as principais funcionalidades do React para estruturar o
              layout, além da biblioteca{" "}
              <span className="font-[metropolisbold]">axios</span> e
              promessas/catch para fazer o get request.
            </h5>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-x-8 gap-y-2 px-24">
          <h3 className="row-start-1 row-end-2 col-start-1 col-end-2 text-3xl">
            RESTAURANTE
          </h3>
          <div className="row-start-2 row-end-3 col-start-1 col-end-2 w-full h-full shadow-[0_3px_3px_0_rgba(0,0,0,0.25)]">
            <a href="https://restaurant-page-eight.vercel.app/" target="_blank">
              <img
                className="object-center object-cover rounded"
                srcSet="
                    /imagens/rp.png 600w,
                    /imagens/rp-s.png 300w
                  "
              />
            </a>
          </div>
          <div className="flex flex-col col-start-2 col-end-3 row-start-1 row-end-3 gap-4">
            <h4 className="text-xl pt-3">PRINCIPAIS TECNOLOGIAS</h4>
            <div className="flex gap-6">
              <ReactColorido width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <GitColorido width={60} height={60} />
            </div>
            <h5 className="font-[metropolislight]">
              Projeto feito para solidificar os conhecimentos adquiridos até
              então. Implementa alguns padrões básicos do front-end como{" "}
              <span className="font-[metropolisbold]">
                carrossel de imagens
              </span>
              , <span className="font-[metropolisbold]">transições</span> e{" "}
              <span className="font-[metropolisbold]">animações</span>. Em
              termos visuais, a tentativa foi de criar um design simples,
              responsivo e elegante com a temática de um restaurante de frutos
              do mar. Conceitos de React como{" "}
              <span className="font-[metropolisbold]">props</span> e{" "}
              <span className="font-[metropolisbold]">hooks</span> foram
              utilizados em todo o projeto.
            </h5>
          </div>
        </div>
        <Link to="/projetos">
          <button className="text-xl text-slate-50 ml-24 bg-cyan-600 px-4 py-1 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.25)_inset]">
            VER MAIS PROJETOS
          </button>
        </Link>
      </div>
    </div>
  );
};
