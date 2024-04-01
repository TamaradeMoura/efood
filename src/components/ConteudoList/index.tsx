import { useState } from "react"

import pizza from '../../assets/images/pizza.png'
import botao from '../../assets/images/botao.png'
import fechar from '../../assets/images/close.png'


import { Button1, Button2, Card1, Card2, Close, Food, Img1, Img2, StyleModal } from "./styles"


type Props = {
  title: string
  description: string
  image: string
}

 export interface ModalState {
  isVisible: boolean
}


const List = ({title, description, image}: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
  })

  const closeModal = () => {
    setModal({
      isVisible: false
    })
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
      <Img2 src={pizza} alt='pizza marguerita' />
      <Food>
      <h2>Pizza Marguerita</h2>
      <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável.
        Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade,
        manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido,
        o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa,
        que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
      </p>
      <p>Serve: de 2 a 3 pessoas</p>
      <Button2 src={botao} alt="botao compra" />
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
