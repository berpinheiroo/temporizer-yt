import { Button } from "@/components/ui/button";
import { PencilIcon, PlayIcon, RefreshCcw, SquareIcon } from "lucide-react";
import { Helmet } from "react-helmet-async";

export function Home() {
  return <div className="flex bg-zinc-900 min-h-screen items-center justify-center overflow-hidden transition-all duration-1000">
    <Helmet title="FINALIZOU SEU TEMPORIZER!"/>

    <div className="relative flex flex-col items-center">
      <div className="flex select-none items-center font-orbitron text-[2.5rem] font-medium text-emerald-500 transition-all">
        <h2>Hello World</h2>

        {/* Botões de ação */}
        <div className="visible absolute -bottom-20 left-1/2 flex -translate-x-1/2 items-center gap-8 opacity-100 transition-all duration-500">
           <Button size="icon" type="button" variant="outline" title="Clique para editar o contador" className="rounded-full bg-transparent text-white">
            <PencilIcon className="size-4"/>
            <span className="sr-only">Editar contador</span>
           </Button>

           <Button size="icon" type="button" variant="outline" title="Clique para resetar o contador" className="rounded-full bg-transparent text-white transition-al duration-500">
            <RefreshCcw className="size-4"/>
            <span className="sr-only">Resetar contador</span>
           </Button>

           <Button size="icon" type="button" variant="outline" title="Clique para pausar o contador" className="rounded-full bg-transparent text-rose-500">
            <SquareIcon className="size-4"/>
            <span className="sr-only">Pausar contador</span>
           </Button>

           <Button size="icon" type="button" variant="outline" title="Clique para iniciar o contador" className="rounded-full bg-transparent text-emerald-500">
            <PlayIcon className="size-4"/>
            <span className="sr-only">Iniciar contador</span>
           </Button>
        </div>
      </div>
    </div>
  </div>
}
