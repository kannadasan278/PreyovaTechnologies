import { TRUST_ITEMS } from '../../data/home'

export default function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Why work with us">
      <div className="container">
        <div className="trust-inner reveal">
          {TRUST_ITEMS.map((item) => (
            <div className="trust-item" key={item.title}>
              <div className="trust-icon"><i className={`bi ${item.icon}`} aria-hidden="true"></i></div>
              <div><strong>{item.title}</strong><span>{item.desc}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
