import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'
import { BgImage } from '../../components/BgImage'

export function DefaultLayout() {
  return (
    <>
      <BgImage />
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </>
  )
}
