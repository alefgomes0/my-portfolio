export const Formação = () => {
  return (
    <div className="font-[metropolisregular] grid grid-cols-1 grid-rows-[auto_1fr] gap-2 pt-24 isolate relative after:absolute after:content-[''] after:inset-0 after:bg-neutral-100 after:skew-y-[-5deg] after:z-[-1]">
      <h4 className="text-5xl pt-24 pb-16">Formação</h4>
      <div className="grid grid-col-1 grid-row-2 gap-8">
        <div className="flex flex-col ">
          <h5 className="pb-2 text-3xl">Hard skills</h5>
          <ul className="text-xl list-disc list-inside">
            <li>Gradução em Direito - Universidade Federal da Bahia</li>
            <li>Introdução à Ciência da Computação - Harvard's CS50</li>
            <li>Introdução à Programação com Python - Harvard's CS50P</li>
            <li>Curso de Programador Web Fullstack - The Odin Project</li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <h5 className="text-3xl">Soft skills</h5>
          <ul className="text-xl list-disc list-inside">
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
  );
};
