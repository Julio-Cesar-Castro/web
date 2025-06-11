import logoSvg from "../assets/logo.svg"
import lotOutSvg from "../assets/logout.svg"

export function Header(){
  return (
    <header className="w-full flex justify-between">
      <img className="my-8" src={logoSvg} alt="Logo" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">Olá, Julio</span>
        <img src={lotOutSvg} alt="Icone de sair" className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"/>
      </div>
    </header>
  )
}