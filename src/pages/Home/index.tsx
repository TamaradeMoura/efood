import Header from "../../components/Header"
import ContentList from "../../components/ContentList"
import { useEffect, useState } from "react"

export interface Cardapio {
  nome: string
  foto: string
  preco: number
  porcao: string
  id: number
  descricao: string
}


export type Pratos = {
  id: number
  descricao: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  capa: string
  foto: string
  preco: number
  nome: string
  porcao: string
  cardapio: Cardapio[]
}

const Home = () => {
  const [produtos, setProdutos] = useState<Pratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((res) => setProdutos(res))
  }, [])


  return (
    <>
    <Header />
    <ContentList prato={produtos} />
  </>
  )
}

export default Home
