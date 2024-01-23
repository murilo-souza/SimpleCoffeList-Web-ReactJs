import { NavLink } from 'react-router-dom'
import {
  Container,
  Description,
  ImageVector,
  NavContainer,
  Title,
} from './styles'
import Vector from '../../assets/vector.svg'

export function Header() {
  return (
    <>
      <ImageVector src={Vector} />
      <Container>
        <Title>Our Collection</Title>
        <Description>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </Description>
        <NavContainer>
          <NavLink to="/" title="All Products">
            All Products
          </NavLink>
          <NavLink to="/available" title="Available Now">
            Available Now
          </NavLink>
        </NavContainer>
      </Container>
    </>
  )
}
