import ButtonLink from "@src/components/ButtonLink";
import FormStore from "@src/components/FormStore";
import { IoArrowBackOutline } from "react-icons/io5";

export default function New() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="h-full items-center justify-content-center">

        <ButtonLink onClick={'/'} icon={IoArrowBackOutline} type="primary" label="Voltar" />
        <section className='flex flex-col justify-center border-2 rounded shadow-xl p-6 mt-2'>
          <h2 className="text-primary font-bold text-xl mb-6">Cadastre um novo candidato</h2>

          <FormStore />
        </section>

      </div>
    </main>
  )
}
