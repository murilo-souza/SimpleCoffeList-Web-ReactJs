import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 3rem;

  z-index: 1;
`

export const Title = styled.h1`
  font-size: 2rem;

  color: ${(props) => props.theme.gray100};
`

export const Description = styled.span`
  font-size: 1rem;
  font-weight: 400;

  max-width: 30rem;

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

export const ImageVector = styled.img`
  right: 31.5%;
  top: 12.6rem;

  position: absolute;

  @media (max-width: 1068px) {
    display: none;
  }
`
