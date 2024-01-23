import styled from 'styled-components'

export const Container = styled.div`
  width: 15rem;

  position: relative;
`
export const CoffeeImg = styled.img`
  width: 15rem;
  height: 10rem;

  object-fit: cover;
  overflow: hidden;

  border-radius: 10px;
`

export const Content = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
    font-weight: bold;
  }

  span {
    background-color: ${(props) => props.theme.green200};

    padding: 0.25rem 0.5rem;

    border-radius: 5px;

    color: ${(props) => props.theme.gray800};

    font-size: 0.75rem;
    font-weight: bold;
  }

  margin-bottom: 1rem;
`

export const Footer = styled.footer`
  display: flex;

  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme.orange400};
  }
`

export const Rating = styled.div`
  display: flex;

  align-items: center;

  p {
    font-size: 0.75rem;

    span {
      color: ${(props) => props.theme.gray300};
    }
  }
`

export const Popular = styled.p`
  background-color: ${(props) => props.theme.yellow400};

  padding: 0.25rem 0.5rem;

  border-radius: 10px;

  color: ${(props) => props.theme.gray800};

  font-size: 0.75rem;
  font-weight: bold;

  position: absolute;

  top: 0.75rem;
  left: 0.75rem;
`
