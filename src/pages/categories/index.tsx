import { useEffect, useState } from "react"
import MenuList from "../../components/MenuList"

import { Pratos } from '../Home'


const Categories = () => {
  const [cardapio, setCardapio] = useState<Pratos[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
    .then((res) => res.json())
    .then((res) => setCardapio(res))
  }, [])

  return (
    <div>
    <MenuList prato={cardapio}  />
  </div>
  )
}

export default Categories
