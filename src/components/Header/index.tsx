import { NavLink } from 'react-router-dom'
import { Container, Description, NavContainer, Title } from './styles'

export function Header() {
  return (
    <Container>
      <Title>Our Collection</Title>
      <Description>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
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
  )
}
