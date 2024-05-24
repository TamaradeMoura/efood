import { Pratos } from '../../pages/Home'
import Conteudo from "../Conteudo"
import { Group } from "./styles"

export type Props = {
  prato:  Pratos[]
}

const ContentList = ({prato}: Props) => (
  <Group>
    {prato.map((prato) => (
      <Conteudo
        key={prato.id}
        description={prato.descricao}
        image={prato.capa}
        title={prato.titulo}
        score={prato.avaliacao}
        types={prato.tipo}
        id={prato.id}
      />
    ))}
  </Group>
)

export default ContentList
