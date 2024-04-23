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
        description={prato.description}
        image={prato.image}
        infos={prato.infos}
        title={prato.title}
        score={prato.score}
      />
    ))}
  </Group>
)

export default ContentList
