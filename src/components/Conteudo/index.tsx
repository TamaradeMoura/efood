import star from '../../assets/images/estrela.png'
import {  Botao, Button, Card, Infos, Linha, Score } from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  score: string
}

const Conteudo = ({
  title,
  description,
  infos,
  image,
  score
}: Props) => (
    <Card>
      <img src={image} alt={title} />
      <Linha>
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
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
