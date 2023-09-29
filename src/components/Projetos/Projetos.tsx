import { Link } from "react-router-dom";
import { CSSColorido } from "../svg/CSS";
import { GitColorido } from "../svg/Git";
import { ReactColorido } from "../svg/ReactColorido";
import { TailwindColorido } from "../svg/Tailwind";
import { TypeScriptColorido } from "../svg/TypeScript";
import { NodeJSColorido } from "../svg/NodeJSColorido";
import { Express } from "../svg/Express";
import { MongoDB } from "../svg/MongoDB";
import { Projeto } from "../Projeto/Projeto";

export const Projetos = () => {
  return (
    <section className="dark:text-neutral-100 font-[metropolisregular] grid grid-cols-1 grid-rows-[auto_1fr] gap-2 pt-24 isolate relative after:absolute after:content-[''] after:inset-0 after:bg-neutral-100 after:dark:bg-neutral-950 after:skew-y-[-5deg] after:z-[-1]">
      <h2 className="dark:text-neutral-50 font-[metropolisbold] opacity-80 text-4xl md:text-6xl px-8 md:px-24 mb-8">
        Meus Projetos
      </h2>
      <div className="grid grid-cols-1 grid-rows-[min-height_min-height_min-height_auto] gap-x-8 gap-y-16 mt-4">
        <Projeto
          title="ONDE ESTÁ WALLY?"
          imagePath="/imagens/ww"
          projectLink="https://where-is-waldo-df50f2et1-alefgomes0.vercel.app"
          children={
            <>
              <ReactColorido width={60} height={60} />
              <TailwindColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <NodeJSColorido width={60} height={60} />
              <Express width={60} height={60} />
              <MongoDB width={60} height={60} />
              <GitColorido width={60} height={60} />
            </>
          }
          textContent={
            <>
              <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
                Baseado no jogo "Onde está Wally", o backend do site, feito com
                ExpressJS, utiliza{" "}
                <span className="font-[metropolisbold] dark:text-white">
                  REST API's{" "}
                </span>
                para exibir os pokémons a serem localizados, bem como para
                mostrar o ranking dos jogadores em cada mapa. Os dados estão
                armazenados no{" "}
                <span className="font-[metropolisbold] dark:text-white">
                  MongoDB{" "}
                </span>
                e, para manejá-los, foi utilizado o ODM{" "}
                <span className="font-[metropolisbold] dark:text-white">
                  Mongoose
                </span>
                , assim como outros middlewares como{" "}
                <span className="font-[metropolisbold] dark:text-white">
                  express-validator e express-async-handler
                </span>
                . O front-end utilizou Vite (React + TypeScript) e diversos
                hooks como useState, useEffect, useContext e hooks
                customizáveis, além de axios para fazer os requests. Já para
                manejar as rotas internas, a escolha foi o react-router-dom.
              </h5>
            </>
          }
        />
        <Projeto
          title="LIVRARIA"
          imagePath="/imagens/sc"
          projectLink="https://shopping-cart-cnb1wrr2z-alefgomes0.vercel.app"
          children={
            <>
              <ReactColorido width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <GitColorido width={60} height={60} />
            </>
          }
          textContent={
            <>
              <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
                Site com design responsivo que utiliza uma base de dados em
                arquivo{" "}
                <span className="font-[metropolisbold] dark:text-white">
                  .json{" "}
                </span>
                localizada na própria pasta do projeto para exibir os livros. É
                possível filtrar por nome ou gênero, adicionar/remover do
                carrinho de compras e visualizar os itens em uma página para
                finalizar o pagamento. Os principais hooks do React foram
                utilizados no projeto, como{" "}
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
                e um{" "}
                <span className="font-[metropolisbold]">
                  hook personalizado
                </span>{" "}
                para armazenar os livros escolhidos em local storage.
              </h5>
            </>
          }
        />
        <Projeto
          title="ONG AMBIENTAL"
          imagePath="/imagens/trees"
          projectLink="https://trees-lilac.vercel.app/"
          children={
            <>
              <ReactColorido width={60} height={60} />
              <TailwindColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <GitColorido width={60} height={60} />
            </>
          }
          textContent={
            <>
              <h5 className="font-[metropolislight] text-base md:text-sm lg-text-base">
                O site, com temática inspirada em uma ONG que ajuda a combater
                queimadas, conta com algumas funcionalidades. Por um lado, ele
                consome duas{" "}
                <span className="font-[metropolisbold] dark:text-white">
                  API's
                </span>{" "}
                diferentes para gerar um mapa com as localizações dos últimos
                incêndios florestais registrados. Além disso, conta com uma
                página de notícias, com conteúdo lorem ipsum, para mostrar
                diferentes estilizações de texto. Feito com Tailwind, o site é
                responsivo e utiliza as principais funcionalidades do React para
                estruturar o layout, além da biblioteca{" "}
                <span className="font-[metropolisbold] dark:text-white">
                  axios
                </span>{" "}
                e promessas/catch para fazer o get request.
              </h5>
            </>
          }
        />
        <Projeto
          title="RESTAURANTE"
          imagePath="/imagens/rp"
          projectLink="https://restaurant-page-gb1oig22h-alefgomes0.vercel.app"
          children={
            <>
              <ReactColorido width={60} height={60} />
              <CSSColorido width={60} height={60} />
              <TypeScriptColorido width={60} height={60} />
              <GitColorido width={60} height={60} />
            </>
          }
          textContent={
            <>
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
            </>
          }
        />
        <Link to="/projetos">
          <button
            className="text-xl text-slate-50 ml-8 mb-8 md:ml-24 bg-cyan-600 px-4 py-1 rounded shadow-[0_3px_3px_0_rgba(0,0,0,0.25)] hover:shadow-[0_3px_3px_0_rgba(0,0,0,0.25)_inset]"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
          >
            VER MAIS PROJETOS
          </button>
        </Link>
      </div>
    </section>
  );
};
