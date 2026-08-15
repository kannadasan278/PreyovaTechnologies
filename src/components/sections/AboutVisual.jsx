export default function AboutVisual({ rows, badgeIcon, badgeText, code, className = 'reveal reveal-left' }) {
  return (
    <div className={`about-visual ${className}`}>
      <div className="av-panel">
        <div className="av-panel-inner">
          {rows.map((row) => (
            <div className="av-row" key={row.title}>
              <div className="av-icon"><i className={`bi ${row.icon}`} aria-hidden="true"></i></div>
              <div>
                <strong>{row.title}</strong>
                <small>{row.small}</small>
              </div>
            </div>
          ))}
          <div className="av-code" aria-hidden="true">{code}</div>
        </div>
      </div>
      <div className="av-badge"><i className={`bi ${badgeIcon}`} aria-hidden="true"></i> {badgeText}</div>
    </div>
  )
}
