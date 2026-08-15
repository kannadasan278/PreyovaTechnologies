export default function WhyCard({ num, icon, title, desc }) {
  return (
    <div className="why-card">
      <span className="why-num">{num}</span>
      <div className="why-icon"><i className={`bi ${icon}`} aria-hidden="true"></i></div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
