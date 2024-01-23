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
  id: number
  name: string
  image: string
  price: string
  rating: number
  votes: number
  popular: boolean
  available: boolean
}

interface CoffeeData {
  coffee: CoffeeCardProps
}

export function Card({ coffee }: CoffeeData) {
  return (
    <Container>
      <CoffeeImg src={coffee.image} />
      {coffee.popular && <Popular>Popular</Popular>}
      <Content>
        <p>{coffee.name}</p>
        <span>{coffee.price}</span>
      </Content>
      <Footer>
        <Rating>
          {coffee.rating ? (
            <>
              <img src={StarFill} alt="Estrela" width="25" height="25" />
              <p>
                {coffee.rating} <span>({coffee.votes} votes)</span>
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
        {!coffee.available && <span>Sold out</span>}
      </Footer>
    </Container>
  )
}
