import { Apresentacao } from "../../components/Apresentacao/Apresentacao";
import { Formação } from "../../components/Formação/Formação";
import { Projetos } from "../../components/Projetos/Projetos";

export const HomeContent = () => {
  return (
      <main className="bg-neutral-200 w-full">
        <Apresentacao />
        <Projetos />
        <Formação />
      </main>
  );
};
