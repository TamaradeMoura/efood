import { useSelector } from 'react-redux'


import { Button1 } from '../ConteudoList/styles'
import { RootReducer } from '../store'
import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'


const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)


  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)}

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay />
        <Sidebar>
            <ul>
              {items.map((item) => (
              <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                </div>
                  <button type='button'/>
              </CartItem>

              ))}
            </ul>
                <Prices>
                    <p>Valor Total</p>
                    <p>{formataPreco(getTotalPrice())}</p>
                </Prices>
                <Button1>Continuar com a entrega</Button1>
        </Sidebar>
    </CartContainer>
  )
}

export default Cart
