export const Formação = () => {
  return (
    <>
      <h4 className="text-6xl pt-36 pb-16 pl-24">Formação</h4>
      <div className="justify-items-center font-[metropolisregular] grid grid-cols-1 grid-rows-1 gap-2 pt-24 pb-24  isolate relative after:absolute after:content-[''] after:inset-0 after:bg-gray-300 after:skew-y-[-5deg] after:z-[-1]">
        <div className="grid grid-col-1 grid-row-2 gap-8">
          <div className="flex flex-col gap-2">
            <h5 className="pb-2 text-3xl">Hard skills</h5>
            <ul className="text-xl list-disc list-inside pl-1">
              <li>Gradução em Direito - Universidade Federal da Bahia</li>
              <li>Introdução à Ciência da Computação - Harvard's CS50</li>
              <li>Introdução à Programação com Python - Harvard's CS50P</li>
              <li>Curso de Programador Web Fullstack - The Odin Project</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="justify-center justify-items-end font-[metropolisregular] grid grid-cols-1 grid-rows-1 gap-2 pt-24 pb-24 pr-24  isolate relative after:absolute after:content-[''] after:inset-0 after:bg-gray-400 after:skew-y-[-5deg] after:z-[-1]">
        <div className="grid grid-col-1 grid-row-2 gap-8">
          <div className="flex flex-col gap-2">
            <h5 className="text-3xl">Soft skills</h5>
            <ul className="text-xl list-disc list-inside pl-1">
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
    </>
  );
};
