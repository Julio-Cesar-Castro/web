import logoSvg from "../assets/logo.svg"
import lotOutSvg from "../assets/logout.svg"

import { useAuth } from "../hooks/useAuth"

export function Header() {

  const auth = useAuth()

  return (
    <header className="w-full flex justify-between">
      <img className="my-8" src={logoSvg} alt="Logo" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">Olá, {auth.session?.user.name}</span>
        <img src={lotOutSvg} alt="Icone de sair" onClick={() => auth.remove()} className="my-8 cursor-pointer hover:opacity-75 transition ease-linear" />
      </div>
    </header>
  )
}