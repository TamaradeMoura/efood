import { Link } from "react-router-dom"

import Pratos from "../../models/Pratos"
import List from "../ConteudoList"
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import apresentacao from '../../assets/images/apresentacao.png'
import restaurantes from '../../assets/images/Restaurantes.png'
import carrinho from '../../assets/images/carrinho.png'


import { Group, Header, Header2, Titulo1 } from "./styles"


export type Props = {
  prato:  Pratos[]
}




const MenuList = ({prato}: Props) => {



  return (
    <>
    <Header style={{backgroundImage: `url(${fundo})`}}>
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
      {prato.map((prato) => (
        <List
        key={prato.id}
        description={prato.description}
        image={prato.image}
        title={prato.title}
        />
      ))}
    </Group>
  </>
  )
}

export default MenuList
