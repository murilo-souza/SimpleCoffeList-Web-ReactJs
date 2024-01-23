import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  padding: 2.5rem;
  margin: -9.5rem auto 2rem auto;

  background: ${(props) => props.theme.gray700};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: -3rem auto 2rem auto;
  }
`
