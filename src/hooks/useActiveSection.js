import { useEffect, useState } from 'react'

export default function useActiveSection(pathname) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('main [id]')
    if (sections.length === 0) {
      setActiveId('')
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-38% 0px -55% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  return activeId
}
