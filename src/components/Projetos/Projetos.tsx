import { BotaoMaisProjetos } from "../BotaoMaisProjetos/BotaoMaisProjetos";
import { ProjetosHome } from "../ProjetosHome/ProjetosHome";

export const Projetos = () => {
  return (
    <section className="dark:text-neutral-100 font-[metropolisregular] grid grid-cols-1 grid-rows-[auto_1fr] gap-2 pt-24 isolate relative after:absolute after:content-[''] after:inset-0 after:bg-neutral-100 after:dark:bg-neutral-950 after:skew-y-[-5deg] after:z-[-1]">
      <h2 className="dark:text-neutral-50 font-[metropolisbold] opacity-80 text-4xl md:text-6xl px-8 md:px-24 mb-8">
        Meus Projetos
      </h2>
      <div className="grid grid-cols-1 grid-rows-[min-height_min-height_min-height_auto] gap-x-8 gap-y-16 mt-4">
        <ProjetosHome />
        <BotaoMaisProjetos />
      </div>
    </section>
  );
};
