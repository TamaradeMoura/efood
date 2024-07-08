import {  useState } from "react"
import { useDispatch } from 'react-redux'

import botao from '../../assets/images/botao.png'
import fechar from '../../assets/images/close.png'


import { Button1, Button2, Card1, Card2, Close, Food, Img1, Img2, StyleModal } from "./styles"
import { add, open } from '../store/reducers/cart'



type Props = {
  title: string
  description: string
  image: string
  nome: string
  foto: string
  porcao: string
  descricao: string
}

 export interface ModalState {
  isVisible: boolean
}


const List = ({title, description, image, nome, foto, porcao, descricao }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  const dispatch = useDispatch()

  const addToCart = (id: number) => {
    dispatch(add(id))
    dispatch(open())
  }

  return (
    <>
    <Card1>
      <Img1 src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <Button1 onClick={() => {
        setModal({
          isVisible: true
        })
      }}>Adicionar ao carrinho</Button1>
    </Card1>
    <StyleModal className={modal.isVisible ? 'visible' : ''}>
    <Card2>
    <Close>
      <img onClick={() => {
        closeModal()
      }} src={fechar} alt="botao de fechar" />
    </Close>
    <div className="title">
      <Img2 src={foto} alt='pizza marguerita' />
      <Food>
      <h2>{nome}</h2>
      <p>{descricao}</p>
      <p className="p2">{porcao}</p>
      <Button2 src={botao} onClick={addToCart} alt="botao compra" />
      </Food>
    </div>
  </Card2>
    <div onClick={() => {
      closeModal()
    }} className="overlay"></div>
    </StyleModal>
      </>
  )
  }

export default List
