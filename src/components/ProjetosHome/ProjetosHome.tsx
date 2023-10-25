import { CSSColorido } from "../svg/CSS";
import { GitColorido } from "../svg/Git";
import { ReactColorido } from "../svg/ReactColorido";
import { TailwindColorido } from "../svg/Tailwind";
import { TypeScriptColorido } from "../svg/TypeScript";
import { NodeJSColorido } from "../svg/NodeJSColorido";
import { Express } from "../svg/Express";
import { MongoDB } from "../svg/MongoDB";
import { Projeto } from "../Projeto/Projeto";

export const ProjetosHome = () => {
  return (
    <>
      <Projeto
        title="THE ODIN ZAP"
        imagePath="/imagens/oz"
        projectLink="https://messaging-app-peach-psi.vercel.app/"
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
              Projeto feito como conclusão do curso de Desenvolvedor Web full
              stack do{" "}
              <a
                href="https://www.theodinproject.com"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-1 underline-offset-4 decoration-blue-600"
              >
                The Odin Project
              </a>
              . O front end, feito em{" "}
              <span className="font-[metropolisbold] dark:text-white">
                React{" "}
              </span>
              , buscou fazer uma representação semelhante ao Whatsapp. A tela de
              login foi criada com{" "}
              <span className="font-[metropolisbold] dark:text-white">
                Formik{" "}
              </span>
              e{" "}
              <span className="font-[metropolisbold] dark:text-white">
                Yup{" "}
              </span>{" "}
              para validar as informações necessárias. A autorização é feita
              através de estratégia local (email + senha). Os dados são
              sanitarizados e encriptados com hash e salt através do{" "}
              <span className="font-[metropolisbold] dark:text-white">
                bcrypt{" "}
              </span>
              antes de serem armazenados no banco de dados. Já a autenticação é
              feita com a estratégia{" "}
              <span className="font-[metropolisbold] dark:text-white">JWT</span>
              , garantindo ao usuário um access e um refresh token, que é
              armazenado no próprio estado da aplicação e posteriormente
              interceptado com{" "}
              <span className="font-[metropolisbold] dark:text-white">
                axios{" "}
              </span>{" "}
              no momento de comunicação com os{" "}
              <span className="font-[metropolisbold] dark:text-white">
                REST API's
              </span>
              . Não utilizar o localStorage ou cookies para armazenar o token
              garante maior segurança ao aplicativo. O backend foi feito com{" "}
              <span className="font-[metropolisbold] dark:text-white">
                Express + MongoDB{" "}
              </span>
              e o ODM{" "}
              <span className="font-[metropolisbold] dark:text-white">
                Mongoose
              </span>
              . Dada à natureza dinâmica da aplicação, empregou-se a tecnologia
              de websockets com o{" "}
              <span className="font-[metropolisbold] dark:text-white">
                socket.io
              </span>
              , o que diminui a latência do sistema e garante maior
              interatividade entre os usuários.
            </h5>
          </>
        }
      />
      <Projeto
        title="ONDE ESTÁ WALLY?"
        imagePath="/imagens/ww"
        projectLink="https://where-is-waldo-eta.vercel.app/"
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
              para exibir os pokémons a serem localizados, bem como para mostrar
              o ranking dos jogadores em cada mapa. Os dados estão armazenados
              no{" "}
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
              . O front-end utilizou Vite (React + TypeScript) e diversos hooks
              como useState, useEffect, useContext e hooks customizáveis, além
              de axios para fazer os requests. Já para manejar as rotas
              internas, a escolha foi o react-router-dom.
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
              e um{" "}
              <span className="font-[metropolisbold]">hook personalizado</span>{" "}
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
    </>
  );
};
