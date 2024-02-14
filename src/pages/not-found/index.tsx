import { Button } from "components/button";
import { Link } from "react-router-dom";


export default function NotFoundPage() {
    return(
    <div className="container-error w-screen h-screen flex flex-col justify-center itens-center ">
        <p className="text-6xl text-center font-bold">ERRO 404</p>
        <p className="text-xl text-center text-zinc-500">Página não encontrada :(</p> 
        <Link className="ml-auto mr-auto mt-8 w-32" to="/">
        <Button  variant="outline">Voltar para o Inicio</Button>
        </Link>
    </div>
    )
  }
  