import { useEffect } from 'react'

export default function useBackToTop() {
  useEffect(() => {
    const backTop = document.getElementById('backTop')
    if (!backTop) return undefined

    const onScroll = () => {
      if (window.scrollY > 480) {
        backTop.classList.add('show')
      } else {
        backTop.classList.remove('show')
      }
    }

    const onClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    backTop.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      backTop.removeEventListener('click', onClick)
    }
  }, [])
}
