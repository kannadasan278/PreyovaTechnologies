import { PROCESS_STEPS } from '../../data/home'

export default function ProcessSteps() {
  return (
    <section className="section" id="process">
      <div className="container">
        <div className="section-head center reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">How We Turn Ideas Into <span className="text-gradient">Digital Products</span></h2>
          <p className="section-subtitle">A transparent, proven process that keeps you in control from day one.</p>
        </div>

        <div className="process">
          <div className="process-track">
            {PROCESS_STEPS.map((step) => (
              <div className="process-step reveal" key={step.num}>
                <span className="process-node">{step.num}</span>
                <div className="process-body">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
