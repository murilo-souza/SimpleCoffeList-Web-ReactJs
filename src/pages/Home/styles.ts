import styled from 'styled-components'

export const Container = styled.main`
  display: grid;

  grid-template-columns: repeat(3, 17rem);

  grid-gap: 2.5rem 0rem;

  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`

export const SpinnerContainer = styled.main`
  display: flex;

  justify-content: center;
`
