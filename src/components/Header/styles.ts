import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 2rem;

  color: ${(props) => props.theme.gray100};
`

export const Description = styled.span`
  font-size: 0.875rem;
  font-weight: 400;

  max-width: 27rem;

  text-align: center;

  color: ${(props) => props.theme.gray300};

  margin-top: 0.5rem;
`

export const NavContainer = styled.nav`
  display: flex;

  align-items: center;

  gap: 1rem;

  margin-top: 1.5rem;

  margin-bottom: 2.5rem;

  a {
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.gray100};

    &:not(.active):hover {
      color: ${(props) => props.theme.gray300};
    }

    &.active {
      padding: 0.5rem 1rem;

      border-radius: 0.5rem;

      background: ${(props) => props.theme.gray300};
    }
  }
`
