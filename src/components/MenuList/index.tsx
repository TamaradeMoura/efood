import { Link } from "react-router-dom"
import Pratos from "../../models/Pratos"
import List from "../ConteudoList"
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import apresentacao from '../../assets/images/apresentacao.png'

import { Group, Header, Img } from "./styles"

export type Props = {
  prato:  Pratos[]
}

const MenuList = ({prato}: Props) => (
  <>
    <Header style={{backgroundImage: `url(${fundo})`}}>
      <h2>Restaurantes</h2>
    <Link to='/'>
      <div className='logo'>
        <img src={logo} alt="logo efood" />
      </div>
    </Link>
    <h2>0 produto(s) no carrinho</h2>
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

export default MenuList
