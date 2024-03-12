import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { Cabecalho, Titulo } from './styles'
import { Link } from 'react-router-dom'

const Header = () => (
  <Cabecalho style={{backgroundImage: `url(${fundo})`}}>
    <Link to='/'>
      <div className='logo'>
        <img src={logo} alt="logo efood" />
      </div>
    </Link>
    <Titulo>
      <h1>Viva experiências gastronômicas no conforto de sua casa</h1>
    </Titulo>
  </Cabecalho>
)

export default Header
