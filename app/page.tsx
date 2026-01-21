import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {
  return (
    <>
      {/* <ThemeToggle /> */}
      <main className="max-w-md mx-auto p-4 text-center">
        {/* Convite */}
        <img
          src="/convite.png"
          alt="Convite de aniversário"
          className="w-full mb-6 rounded-lg"
        />

        {/* Formulário */}
        <form
          action="https://formspree.io/f/xdaaleab"
          method="POST"
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            required
            className="p-3 rounded-md border border-border bg-card text-card-foreground"
          />

          <select
            name="presenca"
            required
            className="p-3 pr-12 rounded-md border border-border bg-card text-card-foreground appearance-none bg-no-repeat bg-[right_1rem_center] bg-[length:1rem]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E\")",
            }}
          >
            <option value="">Vai comparecer?</option>
            <option value="sim">Sim, vou!</option>
            <option value="nao">Não poderei ir</option>
          </select>

          <input
            type="number"
            name="quantidade"
            min="1"
            placeholder="Quantas pessoas?"
            className="p-3 rounded-md border border-border bg-card text-card-foreground"
          />

          <button
            type="submit"
            className="self-center inline-flex items-center justify-center border px-4 py-2 bg-primary text-primary-foreground rounded-md cursor-pointer text-base font-medium hover:opacity-90 transition-opacity"
          >
            Confirmar presença
          </button>
        </form>
      </main>
    </>
  )
}
