import {
  CoffeeImg,
  Container,
  Content,
  Footer,
  Popular,
  Rating,
} from './styles'
import StarFill from '../../assets/Star_fill.svg'
import StarEmpty from '../../assets/Star.svg'

interface CoffeeCardProps {
  name: string
  image: string
  price: string
  rating: number
  votes: number
  popular: boolean
  available: boolean
}

export function Card({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}: CoffeeCardProps) {
  return (
    <Container>
      <CoffeeImg src={image} />
      {popular && <Popular>Popular</Popular>}
      <Content>
        <p>{name}</p>
        <span>{price}</span>
      </Content>
      <Footer>
        <Rating>
          {rating ? (
            <>
              <img src={StarFill} alt="Estrela" width="25" height="25" />
              <p>
                {rating} <span>({votes} votes)</span>
              </p>
            </>
          ) : (
            <>
              <img src={StarEmpty} alt="Estrela" width="25" height="25" />
              <p>
                <span>No ratings</span>
              </p>
            </>
          )}
        </Rating>
        {!available && <span>Sold out</span>}
      </Footer>
    </Container>
  )
}
