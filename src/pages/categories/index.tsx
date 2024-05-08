import { useEffect, useState } from "react"
import MenuList from "../../components/MenuList"

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}


const Categories = () => {
  const [cardapio, setCardapio] = useState<Cardapio[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((res) => setCardapio(res))
  }, [])

  return (
    <div>
    <MenuList card={cardapio}  />
  </div>
  )
}

export default Categories
