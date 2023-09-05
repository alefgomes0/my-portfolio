import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_auto_auto] bg-neutral-200 dark:bg-neutral-900 h-[calc(100dvh-80px)] px-8 md:px-24 pt-24">
      <h3 className="text-3xl font-[metropolisregular] opacity-80 dark:text-gray-100">
        Parece que você está perdido...
      </h3>

      <div className="bg-[url('../../../public/imagens/undraw_Road_sign_re_3kc3.png')] w-[250px] h-[225px] md:w-[400px] bg-cover bg-center md: h-[360px] rounded">
        <div className="w-full h-full bg-neutral-200 opacity-[25%] dark:bg-black"></div>
      </div>

      <Link to="/" onClick={() => scrollTo({ top: 0, behavior: "instant" })}>
        <button className="font-[metropolislight] w-64 py-4 bg-sky-500 text-sky-50 rounded shadow-[0_3px_3px_rgba(0,0,0,0.25)] hover:shadow-[0_3px_3px_rgba(0,0,0,0.25)_inset]">
          Voltar para o início
        </button>
      </Link>
    </div>
  );
};
