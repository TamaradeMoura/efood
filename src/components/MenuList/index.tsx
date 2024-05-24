import { menu } from "../../pages/categories"
import List from "../ConteudoList"



import { Group } from "./styles"



export type Props = {
  prato: menu[]

}


const MenuList = ({prato}: Props) => {

  return (
    <>
    <Group>
      {prato && prato.map((item) => (
        <List
          key={item.id}
          description={item.descricao}
          image={item.foto}
          title={item.nome}
          nome={item.nome}
          foto={item.foto}
          porcao={item.porcao}
          descricao={item.descricao} />
      ))}
    </Group>
  </>
  )
}

export default MenuList
