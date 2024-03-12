import sushi from '../../../assets/images/sushi.png'
import macarrao from '../../../assets/images/macarrao.png'
import star from '../../../assets/images/estrela.png'
import {  Button, Card, Group, Linha, Score } from './styles'



const Conteudo = () => (
  <Group>
    <Card>
      <img src={sushi} alt="imagem de sushi" />
      <Linha>
      <h3 className='titulo'>Hioki Sushi</h3>
      <Score>
      <h3>
        4.9
        <img src={star} alt="pontuação" />
      </h3>
      </Score>
      </Linha>
      <p className='conteudo'>
      Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos,
      sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.
      Experimente o Japão sem sair do lar com nosso delivery!
      </p>
      <Button to='/'>
        Saiba mais
      </Button>
    </Card>
    <Card>
      <img src={macarrao} alt="imagem de sushi" />
      <Linha>
      <h3 className='titulo'>La Dolce Vita Trattoria</h3>
      <Score>
      <h3>
        4.6
        <img src={star} alt="pontuação" />
      </h3>
      </Score>
      </Linha>
      <p className='conteudo'>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
      Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
      </p>
    </Card>
    <Card>
      <img src={macarrao} alt="imagem de sushi" />
      <Linha>
      <h3 className='titulo'>La Dolce Vita Trattoria</h3>
      <Score>
      <h3>
        4.6
        <img src={star} alt="pontuação" />
      </h3>
      </Score>
      </Linha>
      <p className='conteudo'>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
      Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
      </p>
    </Card>
    <Card>
      <img src={macarrao} alt="imagem de sushi" />
      <Linha>
      <h3 className='titulo'>La Dolce Vita Trattoria</h3>
      <Score>
      <h3>
        4.6
        <img src={star} alt="pontuação" />
      </h3>
      </Score>
      </Linha>
      <p className='conteudo'>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
      Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
      </p>
    </Card>
    <Card>
      <img src={macarrao} alt="imagem de sushi" />
      <Linha>
      <h3 className='titulo'>La Dolce Vita Trattoria</h3>
      <Score>
      <h3>
        4.6
        <img src={star} alt="pontuação" />
      </h3>
      </Score>
      </Linha>
      <p className='conteudo'>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
      Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
      </p>
    </Card>
    <Card>
      <img src={macarrao} alt="imagem de sushi" />
      <Linha>
      <h3 className='titulo'>La Dolce Vita Trattoria</h3>
      <Score>
      <h3>
        4.6
        <img src={star} alt="pontuação" />
      </h3>
      </Score>
      </Linha>
      <p className='conteudo'>
      A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
      Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar.
      Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!
      </p>
    </Card>
  </Group>
)

export default Conteudo
