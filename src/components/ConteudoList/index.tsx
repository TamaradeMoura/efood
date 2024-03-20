import { Button, Card, Img } from "./styles"


type Props = {
  title: string
  description: string
  image: string
}

const List = ({title, description, image}: Props) => (
  <>
  <Card>
    <Img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <Button>Adicionar ao carrinho</Button>
  </Card>
    </>
)

export default List
