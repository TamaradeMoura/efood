import x from '../../assets/images/x.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { Text, Logo, Redes, Rodape } from './styles'



const Footer = () => (
  <Rodape style={{backgroundImage: `url(${fundo})`}}>
    <Logo>
      <img src={logo} alt="logo efood" />
    </Logo>
    <Redes>
      <img src={x} alt="twitter" />
      <img className='img' src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
    </Redes>
    <Text>
      <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
        qualidade dos produtos é toda do estabelecimento contratado.</p>
    </Text>
  </Rodape>
)

export default Footer
