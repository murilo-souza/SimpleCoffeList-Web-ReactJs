import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Container, SpinnerContainer } from './styles'
import { api } from '../../services/api'
import { Spinner } from '../../components/Spinner'

export interface CoffeeCardProps {
  id: number
  name: string
  image: string
  price: string
  rating: number
  votes: number
  popular: boolean
  available: boolean
}

export function Home() {
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
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </Container>
      )}
    </>
  )
}
