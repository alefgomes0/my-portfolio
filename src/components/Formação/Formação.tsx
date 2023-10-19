export const Formação = () => {
  return (
    <section>
      <h4 className="dark:text-neutral-50 text-4xl md:text-6xl font-[metropolisregular] pt-16 md:pt-36 pb-16 pl-8 md:pl-24">
        Formação
      </h4>
      <div className="dark:text-neutral-200 justify-items-center grid grid-cols-1 grid-rows-1 gap-2 pt-24 pb-24 pr-0.5 isolate relative after:absolute after:content-[''] after:inset-0 after:bg-gray-300 after:dark:bg-neutral-800 after:skew-y-[-5deg] after:z-[-1]">
        <div className="grid grid-col-1 grid-row-2 gap-8 font-[metropolislight]">
          <div className="flex flex-col gap-2 pl-16 md:pl-24 md:pr-0 lg:pl-0 pr-8">
            <h5 className="text-3xl md:text-5xl pb-2">Hard skills</h5>
            <ul className="text-sm md:text-xl list-disc list-inside pl-1">
              <li className="mb-1">
                Gradução em Direito - Universidade Federal da Bahia{" "}
                <span className="text-sm opacity-[55%]">(2013 - 2019)</span>
              </li>
              <li className="mb-1">
                Introdução à Ciência da Computação - Harvard's CS50{" "}
                <span className="text-sm opacity-[55%]">(2022)</span>
              </li>
              <li className="mb-1">
                Introdução à Programação com Python - Harvard's CS50P{" "}
                <span className="text-sm opacity-[55%]">(2022)</span>
              </li>
              <li className="mb-1"> 
                Curso de Programador Web Fullstack - The Odin Project{" "}
                <span className="text-sm opacity-[55%]">(2023)</span>
              </li>
              <li className="mb-1">
                Introdução ao MongoDB - MongoDB University{" "}
                <span className="text-sm opacity-[55%]">(2023)</span>
              </li>
              <li className="mb-1">
                Introdução a banco de dados com SQL - Harvard's CS50SQL{" "}
                <span className="text-sm opacity-[55%]">(2023)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="justify-center justify-items-end font-[metropolisregular] grid grid-cols-1 grid-rows-1 gap-2 pt-24 pb-24 pl-16 pr-8 md:pr-32  lg:pr-72 isolate relative after:absolute after:content-[''] after:inset-0 after:bg-gray-400 after:dark:bg-neutral-950 after:skew-y-[-5deg] after:z-[-1]">
        <div className="grid grid-col-1 grid-row-2 gap-8">
          <div className="dark:text-neutral-200 flex flex-col gap-2 font-[metropolislight] pl-8 pr-8">
            <h5 className="text-3xl md:text-5xl">Soft skills</h5>
            <ul className="text-sm md:text-xl list-disc list-inside pl-1">
              <li>Boa comunicação</li>
              <li>Aprendizado constante</li>
              <li>Resiliência</li>
              <li>Pensamento lógico e crítico</li>
              <li>Flexibilidade</li>
              <li>Antecipação e resolução de problemas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
