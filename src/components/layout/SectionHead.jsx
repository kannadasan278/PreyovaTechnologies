export default function SectionHead({
  label,
  title,
  subtitle,
  center,
  dark,
  className = '',
  titleStyle,
  subtitleStyle,
}) {
  const cls = ['section-head']
  if (center) cls.push('center')
  if (dark) cls.push('dark')
  if (className) cls.push(className)

  return (
    <div className={cls.join(' ')}>
      <span className={dark ? 'section-label light' : 'section-label'}>{label}</span>
      <h2 className="section-title" style={titleStyle}>{title}</h2>
      {subtitle && <p className="section-subtitle" style={subtitleStyle}>{subtitle}</p>}
    </div>
  )
}
