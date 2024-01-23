import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Container } from './styles'
import { api } from '../../services/api'

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

  async function loadData() {
    const response = await api.get('/simple-coffee-listing-data.json')

    setCoffees(response.data)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <Container>
      {coffees.map((coffee) => (
        <Card key={coffee.id} coffee={coffee} />
      ))}
    </Container>
  )
}
