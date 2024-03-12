import logo from '../../../assets/images/logo.png'
import fundo from '../../../assets/images/fundo.png'
import { Cabecalho, Titulo } from './styles'

const Header = () => (
  <Cabecalho style={{backgroundImage: `url(${fundo})`}}>
    <div className='logo'>
      <img src={logo} alt="logo efood" />
    </div>
    <Titulo>
      <h1>Viva experiências gastronômicas no conforto de sua casa</h1>
    </Titulo>
  </Cabecalho>
)

export default Header
