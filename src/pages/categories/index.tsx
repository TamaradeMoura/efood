import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import MenuList from "../../components/MenuList"
import Header2 from "../../components/Header2"
import Banner from "../../components/Banner"

export type menu = {
  id: number
  nome: string
  foto: string
  preco: number
  porcao: string
  descricao: string
  }

export type Cardapio = {
  id: number
  titulo: string
  capa: string
  tipo: string
  cardapio: menu[]
}


const Categories = () => {
  const { id } = useParams()
  const [perfil, setPerfil] = useState<Cardapio>({} as Cardapio)

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
    .then((res) => res.json())
    .then((res) => setPerfil(res))
  }, [id])



  return (
    <>
    <Header2 />
    <Banner titulo={perfil.titulo} tipo={perfil.tipo} capa={perfil.capa}/>
    <MenuList prato={perfil.cardapio}  />
    </>
  )
}

export default Categories
