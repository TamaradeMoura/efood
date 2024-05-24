import { Link } from "react-router-dom"

import { Header } from "./styles"


import fundo from '../../assets/images/fundo.png'
import restaurantes from '../../assets/images/Restaurantes.png'
import carrinho from '../../assets/images/carrinho.png'
import logo from '../../assets/images/logo.png'


const Header2 = () => {
  return (
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

  )
}

export default Header2
