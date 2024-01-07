import FormSearch from "@src/components/FormSearch";

export default function Search() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="h-full items-center justify-content-center">

        <section className='flex flex-col justify-center border-2 rounded shadow-xl p-6'>
          <h2 className="text-primary font-bold text-xl">Que skill você procura no candidato?</h2>
          <h4 className="mb-6 mt-1 text-sm text-gray-600">Exemplo: javascript</h4>

          <FormSearch />
        </section>

      </div>
    </main>
  )
}
