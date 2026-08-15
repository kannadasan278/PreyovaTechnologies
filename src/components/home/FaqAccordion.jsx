import { Link } from 'react-router-dom'
import { FAQS } from '../../data/home'

export default function FaqAccordion() {
  return (
    <section className="section section-tinted" id="faq">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-4">
            <div className="section-head reveal">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
              <p className="section-subtitle">Answers to common questions about working with Preyova Technologies.</p>
            </div>
            <div className="reveal reveal-delay-1">
              <Link to="/contact" className="btn btn-navy">Still Have Questions? <i className="bi bi-chat-dots"></i></Link>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="accordion faq-accordion reveal" id="faqAccordion">
              {FAQS.map((faq, i) => (
                <div className="accordion-item" key={faq.q}>
                  <h3 className="accordion-header">
                    <button
                      className={`accordion-button${i === 0 ? '' : ' collapsed'}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${i + 1}`}
                      aria-expanded={i === 0 ? 'true' : 'false'}
                      aria-controls={`faq${i + 1}`}
                    >
                      {faq.q}
                    </button>
                  </h3>
                  <div
                    id={`faq${i + 1}`}
                    className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
