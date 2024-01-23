import { useEffect, useState } from 'react'
import { CoffeeCardProps } from '../Home'
import { api } from '../../services/api'
import { Container } from './styles'
import { Card } from '../../components/Card'

export function AvailableNow() {
  const [coffees, setCoffees] = useState<CoffeeCardProps[]>([])

  async function loadData() {
    const response = await api.get('/simple-coffee-listing-data.json')

    setCoffees(response.data)

    setCoffees(coffees.filter((coffee) => coffee.available === true))
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
