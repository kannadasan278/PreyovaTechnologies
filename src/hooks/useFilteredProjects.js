import { useMemo, useState } from 'react'

export default function useFilteredProjects(projects) {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.category === filter)
  }, [projects, filter])

  function applyFilter(next) {
    setFilter(next)
  }

  return { filter, visible, applyFilter }
}
