import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">Ops! Essa página não existe.😢</h1>
        <Link className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear" to="/" >Voltar para o inicio</Link>
      </div>
    </div>
  )
}