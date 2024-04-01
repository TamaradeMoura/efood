import { Link } from "react-router-dom"
import Pratos from "../../models/Pratos"
import List from "../ConteudoList"
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import apresentacao from '../../assets/images/apresentacao.png'
import restaurantes from '../../assets/images/Restaurantes.png'
import carrinho from '../../assets/images/carrinho.png'


import { Group, Header, Img } from "./styles"


export type Props = {
  prato:  Pratos[]
}




const MenuList = ({prato}: Props) => {



  return (
    <>
    <Header style={{backgroundImage: `url(${fundo})`}}>
      <img className="imgEsq" src={restaurantes} alt="restaurantes" />
    <Link to='/'>
      <div className='logo'>
        <img src={logo} alt="logo efood" />
      </div>
    </Link>
    <img className="imgDir" src={carrinho} alt="carrinho" />
    </Header>
    <Img src={apresentacao} alt="imagem massa" />
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
