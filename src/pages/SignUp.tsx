import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { Link, useNavigate } from "react-router"
import { AxiosError } from "axios"
import { z, ZodError } from "zod"

import { api } from "../services/api"

import { useState } from "react"

const signUpSchema = z.object({
  name: z.string().trim().min(1, "Informe o nome"),
  email: z.string({ message: "Informe o e-mail" }).email("E-mail inválido"),
  password: z.string().min(6, "Senha deve ter no minimo 6 caracteres"),
  passwordConfirm: z.string({ message: "Confirme a senha" })
}).refine((data) => data.password === data.passwordConfirm, {
  message: "As senha não são iguais",
  path: ["passwordConfirm"]
})


export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()


  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm
      })

      await api.post("/users", data)

      if (confirm("Cadastrado com sucesso. Ir para tela de entrar?")) {
        navigate("/")
      }

    } catch (error) {
      console.log(error)

      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }

      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      alert("Não foi possível cadastrar")
    } finally {
      setIsLoading(false)
    }

  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input required legend="E-mail" type="email" placeholder="seu@gmail.com" onChange={(e) => setEmail(e.target.value)} />
      <Input required legend="Name" placeholder="seu nome" onChange={(e) => setName(e.target.value)} />
      <Input required legend="Senha" type="password" placeholder="************" onChange={(e) => setPassword(e.target.value)} />
      <Input required legend="Confirmação da senha" type="password" placeholder="************" onChange={(e) => setPasswordConfirm(e.target.value)} />
      <Button isLoading={isLoading} type="submit">Cadastrar</Button>

      <Link to="/" className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear">Ja tenho uma conta</Link>
    </form>
  )
}