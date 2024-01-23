import { useEffect, useState } from 'react'
import { CoffeeCardProps } from '../Home'
import { api } from '../../services/api'
import { Container } from './styles'
import { Card } from '../../components/Card'
import { Spinner } from '../../components/Spinner'
import { SpinnerContainer } from '../Home/styles'

export function AvailableNow() {
  const [coffees, setCoffees] = useState<CoffeeCardProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function loadData() {
    const response = await api.get('/simple-coffee-listing-data.json')
    setCoffees(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      {isLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <Container>
          {coffees
            .filter((coffee) => coffee.available === true)
            .map((coffee) => (
              <Card key={coffee.id} coffee={coffee} />
            ))}
        </Container>
      )}
    </>
  )
}
