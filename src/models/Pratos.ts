class Pratos {

  description: string
  image: string
  infos: string[]
  title: string
  id: number
  score: string

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    score: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.score = score
  }
}

export default Pratos
