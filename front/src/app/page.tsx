import ButtonLink from "@src/components/ButtonLink";
import { SlMagnifier } from "react-icons/sl";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="w-full h-full items-center justify-between">
        <h1 className="mb-3 text-3xl text-center text-primary">
          <span className='text-secondary font-semibold'>Olá,</span> encontre seu candidato!
        </h1>
        <section className='flex flex-row justify-center items-center'>
          <div className="mx-2">
            <ButtonLink onClick={'candidates/search'} type="primary" label="Buscar" />
          </div>
          <div className="mx-2">
            <ButtonLink onClick={'candidates/new'} type="secondary" label="Cadastrar" icon={SlMagnifier} />
          </div>
        </section>
      </div>
    </main>
  )
}
