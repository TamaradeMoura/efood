import Header from "../../components/Header"
import ContentList from "../../components/ContentList"
import { useGetPratoQuery } from "../../services/api"
import { menu } from "../categories"


export type Pratos = {
  cardapio: menu[]
  id: number
  descricao: string
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  capa: string
}

const Home = () => {
  const { data: produtos } = useGetPratoQuery()

  if (produtos) {
    return (
      <>
      <Header />
      <ContentList prato={produtos} />
    </>
    )
  }

  return <h4>Carregando...</h4>

}

export default Home
