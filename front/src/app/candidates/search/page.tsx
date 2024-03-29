import ButtonLink from "@src/components/ButtonLink";
import FormSearch from "@src/components/FormSearch";
import { IoArrowBackOutline } from "react-icons/io5";

export default function Search() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="h-full items-center justify-content-center">

        <ButtonLink onClick={'/'} icon={IoArrowBackOutline} type="primary" label="Voltar" />
        <section className='flex flex-col justify-center border-2 rounded shadow-xl p-6 mt-2'>
          <h2 className="text-primary font-bold text-xl">Que skill você procura no candidato?</h2>
          <h4 className="mb-6 mt-1 text-sm text-gray-600">Exemplo: javascript</h4>

          <FormSearch />
        </section>

      </div>
    </main>
  )
}
