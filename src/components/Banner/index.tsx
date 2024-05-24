import { Header2, Titulo1 } from "./styles";

//import apresentacao from '../../assets/images/apresentacao.png'


type Props = {
  titulo: string
  tipo: string
  capa: string
}


const Banner = ({titulo, tipo, capa}: Props) => {
  return (
      <Header2 style={{backgroundImage: `url(${capa})`}}>
        <Titulo1>
          <h1>{titulo}</h1>
          <h1 className="segundo">{tipo}</h1>
        </Titulo1>
      </Header2>
  )
}

export default Banner

