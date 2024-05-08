import star from '../../assets/images/estrela.png'
import {  Botao, Button, Card, Infos, Linha, Score } from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  description: string
  image: string
  score: string
  types: string
}

const Conteudo = ({
  title,
  description,
  types,
  image,
  score
}: Props) => (
    <Card>
      <img className='imgCapa' src={image} alt={title} />
      <Linha>
        <Infos>
            <Tag>{types}</Tag>
        </Infos>
      <h3 className='titulo'>{title}</h3>
      <Score>
      <h3>
        {score}
        <img src={star} alt="pontuação" />
      </h3>
      </Score>
      </Linha>
      <p className='conteudo'>
      {description}
      </p>
      <Botao>
      <Button to='/Categories'>
        Saiba mais
      </Button>
      </Botao>
    </Card>

)

export default Conteudo
