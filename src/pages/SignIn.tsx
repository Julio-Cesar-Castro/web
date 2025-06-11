import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Link } from "react-router"

import { useState } from "react"

export function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input required legend="E-mail" type="email" placeholder="seu@gmail.com" onChange={(e) => setEmail(e.target.value)} />
      <Input required legend="Senha" type="password" placeholder="************" onChange={(e) => setPassword(e.target.value)} />
      <Button isLoading={isLoading} type="submit">Entrar</Button>

      <Link to="/signup" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Criar conta</Link>
    </form>
  )
}