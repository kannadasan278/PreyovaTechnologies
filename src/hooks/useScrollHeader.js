import { useEffect } from 'react'

export default function useScrollHeader() {
  useEffect(() => {
    const header = document.getElementById('siteHeader')
    if (!header) return undefined

    const onScroll = () => {
      if (window.scrollY > 24) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
