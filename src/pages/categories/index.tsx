import MenuList from "../../components/MenuList"
import Header2 from "../../components/Header2"
import Banner from "../../components/Banner"
import { useGetMenuQuery } from "../../services/api"
import { useParams } from "react-router-dom"

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
  const { data: perfil } = useGetMenuQuery(id!)

  if(perfil) {
    return (
      <>
      <Header2 />
      <Banner titulo={perfil.titulo} tipo={perfil.tipo} capa={perfil.capa}/>
      <MenuList prato={perfil.cardapio}  />
      </>
    )
  }

  return <h4>Carregando...</h4>

}

export default Categories
