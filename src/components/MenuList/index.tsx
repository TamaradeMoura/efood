import { Link } from "react-router-dom"
import { menu } from "../../pages/categories"
import List from "../ConteudoList"
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import apresentacao from '../../assets/images/apresentacao.png'
import restaurantes from '../../assets/images/Restaurantes.png'
import carrinho from '../../assets/images/carrinho.png'


import { Group, Header, Header2, Titulo1 } from "./styles"


export type Props = {
  prato: menu[]

}




const MenuList = ({prato}: Props) => {

  return (
    <>
    <Header style={{backgroundImage: `url(${fundo})`}}>s
      <div className="imgEsq">
        <img src={restaurantes} alt="restaurantes" />
      </div>
      <div className="logo">
        <Link to='/'>
          <img src={logo} alt="logo efood" />
        </Link>
      </div>
    <div className="imgDir">
      <img src={carrinho} alt="carrinho" />
    </div>
    </Header>
    <Header2 style={{backgroundImage: `url(${apresentacao})`}}>
      <Titulo1>
        <h1>Italiana</h1>
        <h1 className="segundo">La Dolce Vita Trattoria</h1>
      </Titulo1>
    </Header2>
    <Group>
      {prato && prato.map((item) => (
        <List
          key={item.id}
          description={item.descricao}
          image={item.foto}
          title={item.nome}  />
      ))}
    </Group>
  </>
  )
}

export default MenuList
