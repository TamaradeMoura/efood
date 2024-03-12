import Pratos from "../../models/Pratos"

import macarrao from '../../assets/images/macarrao.png'
import ContentList from "../../components/ContentList"


const cardapio: Pratos[] = [
    {
      id: 2,
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      title: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      image: macarrao,
      score: '4.9'
    },
    {
      id: 3,
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      title: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      image: macarrao,
      score: '4.9'
    },
    {
      id: 4,
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      title: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      image: macarrao,
      score: '4.9'
    },
    {
      id: 5,
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      title: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      image: macarrao,
      score: '4.9'
    },
    {
      id: 6,
      description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      title: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      image: macarrao,
      score: '4.9'
    }
]



const Menu = () => (
  <div>
    <ContentList prato={cardapio} />
  </div>
)

export default Menu
