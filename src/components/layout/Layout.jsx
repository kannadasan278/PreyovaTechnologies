import { Outlet, useLocation } from 'react-router-dom'
import SkipLink from './SkipLink'
import Header from './Header'
import Footer from './Footer'
import FloatingActions from './FloatingActions'
import ScrollToTop from './ScrollToTop'
import useRevealOnRouteChange from '../../hooks/useRevealOnRouteChange'

export default function Layout() {
  const { pathname } = useLocation()
  useRevealOnRouteChange(pathname)

  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <ScrollToTop />
    </>
  )
}
