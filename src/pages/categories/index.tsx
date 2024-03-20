import Pratos from "../../models/Pratos"
import pizza from '../../assets/images/pizza.png'
import MenuList from "../../components/MenuList"


const cardapio: Pratos[] = [
   {
      id: 2,
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Pizza Marguerita',
      infos: ['Italiana'],
      image: pizza,
      score: '4.9'
    },
    {
      id: 3,
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Pizza Marguerita',
      infos: ['Italiana'],
      image: pizza,
      score: '4.9'
    },
    {
      id: 4,
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Pizza Marguerita',
      infos: ['Italiana'],
      image: pizza,
      score: '4.9'
    },
    {
      id: 5,
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Pizza Marguerita',
      infos: ['Italiana'],
      image: pizza,
      score: '4.9'
    },
    {
      id: 6,
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Pizza Marguerita',
      infos: ['Italiana'],
      image: pizza,
      score: '4.9'
    },
    {
      id: 7,
      description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      title: 'Pizza Marguerita',
      infos: ['Italiana'],
      image: pizza,
      score: '4.9'
    }
]



const Categories = () => (
  <div>
    <MenuList prato={cardapio}  />
  </div>
)

export default Categories
