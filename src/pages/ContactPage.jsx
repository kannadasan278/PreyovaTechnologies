import { Helmet } from 'react-helmet-async'
import PageHero from '../components/layout/PageHero'
import PlaceholderLink from '../components/layout/PlaceholderLink'
import WhyCard from '../components/sections/WhyCard'
import { SITE_CONFIG } from '../data/site'
import { CONTACT_STEPS } from '../data/home'
import useContactForm from '../hooks/useContactForm'
import useWhatsApp from '../hooks/useWhatsApp'

const SERVICE_OPTIONS = [
  { value: 'web-development', label: 'Web Development' },
  { value: 'mobile-app-development', label: 'Mobile App Development' },
  { value: 'custom-software', label: 'Custom Software' },
  { value: 'e-commerce', label: 'E-Commerce' },
  { value: 'ui-ux-design', label: 'UI/UX Design' },
  { value: 'api-integration', label: 'API Integration' },
  { value: 'cloud-devops', label: 'Cloud / DevOps' },
  { value: 'other', label: 'Other' },
]

const BUDGET_OPTIONS = [
  { value: 'not-decided', label: 'Not Decided' },
  { value: 'under-50k', label: 'Under ₹50,000' },
  { value: '50k-1lakh', label: '₹50,000 – ₹1 Lakh' },
  { value: '1-5lakh', label: '₹1 Lakh – ₹5 Lakh' },
  { value: '5lakh-plus', label: '₹5 Lakh+' },
]

const SOCIAL_BTNS = [
  { icon: 'bi-linkedin', cls: 'linkedin', label: 'LinkedIn (placeholder)' },
  { icon: 'bi-instagram', cls: 'instagram', label: 'Instagram (placeholder)' },
  { icon: 'bi-facebook', cls: 'facebook', label: 'Facebook (placeholder)' },
  { icon: 'bi-youtube', cls: 'youtube', label: 'YouTube (placeholder)' },
]

export default function ContactPage() {
  const { formRef, successRef, errors, submitting, success, onSubmit, clearError } = useContactForm()
  const { url: waUrl } = useWhatsApp()

  const fieldClass = (id, base = 'form-control') => `${base}${errors[id] ? ' is-invalid' : ''}`

  return (
    <>
      <Helmet>
        <title>Contact Us | Start Your Project | Preyova Technologies</title>
        <meta name="description" content="Contact Preyova Technologies for web development, mobile apps, custom software, e-commerce and IT solutions. Send an enquiry and we'll get back to you." />
        <meta name="keywords" content="contact Preyova, software enquiry, web development quote, mobile app cost, hire developers, IT solutions Chennai" />
        <link rel="canonical" href="https://www.preyova.in/contact" />
      </Helmet>

      <PageHero
        label="Get In Touch"
        title={<>Let&apos;s Build Something <span className="text-gradient">Great</span></>}
        lead="Tell us about your business challenge, product idea, or technology requirement. We'll get back to you within one business day."
        current="Contact"
      />

      <section className="section" id="contact">
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5">
              <div className="contact-card reveal">
                <span className="section-label">Contact Information</span>
                <h2 className="section-title" style={{ fontSize: 'clamp(1.4rem,2.6vw,1.9rem)' }}>Let&apos;s Build Something Great</h2>
                <p className="text-muted mb-0">Reach out through any channel — we&apos;re happy to help you plan your next digital product.</p>

                <div className="info-item">
                  <div className="info-icon"><i className="bi bi-envelope" aria-hidden="true"></i></div>
                  <div>
                    <small>Email <span className="placeholder-tag">Placeholder</span></small>
                    <strong><a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a></strong>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><i className="bi bi-telephone" aria-hidden="true"></i></div>
                  <div>
                    <small>Phone <span className="placeholder-tag">Placeholder</span></small>
                    <strong><a href={`tel:${SITE_CONFIG.phoneHref}`}>{SITE_CONFIG.phone}</a></strong>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon"><i className="bi bi-geo-alt" aria-hidden="true"></i></div>
                  <div>
                    <small>Location <span className="placeholder-tag">Placeholder</span></small>
                    <strong>{SITE_CONFIG.location}</strong>
                  </div>
                </div>

                <a className="wa-cta" href={waUrl} target="_blank" rel="noopener">
                  <i className="bi bi-whatsapp" aria-hidden="true"></i> Chat on WhatsApp
                </a>

                <div className="social-row" aria-label="Social media links">
                  {SOCIAL_BTNS.map((s) => (
                    <PlaceholderLink key={s.icon} className={`social-btn ${s.cls}`} aria-label={s.label}>
                      <i className={`bi ${s.icon}`}></i>
                    </PlaceholderLink>
                  ))}
                  <a className="social-btn whatsapp" href={waUrl} target="_blank" rel="noopener" aria-label="WhatsApp (placeholder number)">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-card reveal reveal-delay-1">
                <div id="formSuccess" className={`form-success${success ? ' show' : ''}`} role="alert" aria-live="polite" ref={successRef}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                  <span>Thank you! Your enquiry has been received. We&apos;ll get back to you shortly.</span>
                </div>

                <form id="contactForm" noValidate onSubmit={onSubmit} ref={formRef}>
                  <div className="row g-3">
                    <div className="col-md-6 form-group">
                      <label className="form-label" htmlFor="cfName">Full Name <span className="req">*</span></label>
                      <input
                        type="text"
                        className={fieldClass('cfName')}
                        id="cfName"
                        name="name"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        aria-invalid={errors.cfName ? 'true' : 'false'}
                        onInput={() => clearError('cfName')}
                      />
                      <span className="error-text" data-error-for="cfName">Please enter your full name.</span>
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-label" htmlFor="cfEmail">Business Email <span className="req">*</span></label>
                      <input
                        type="email"
                        className={fieldClass('cfEmail')}
                        id="cfEmail"
                        name="email"
                        placeholder="name@company.com"
                        autoComplete="email"
                        required
                        aria-invalid={errors.cfEmail ? 'true' : 'false'}
                        onInput={() => clearError('cfEmail')}
                      />
                      <span className="error-text" data-error-for="cfEmail">Please enter a valid email address.</span>
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-label" htmlFor="cfPhone">Phone Number</label>
                      <input
                        type="tel"
                        className={fieldClass('cfPhone')}
                        id="cfPhone"
                        name="phone"
                        placeholder="+91 12345 67890"
                        autoComplete="tel"
                        inputMode="tel"
                        aria-invalid={errors.cfPhone ? 'true' : 'false'}
                        onInput={() => clearError('cfPhone')}
                      />
                      <span className="error-text" data-error-for="cfPhone">Please enter a valid phone number (min 7 digits).</span>
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-label" htmlFor="cfCompany">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cfCompany"
                        name="company"
                        placeholder="Your company"
                        autoComplete="organization"
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-label" htmlFor="cfService">Service Required <span className="req">*</span></label>
                      <select
                        className={fieldClass('cfService', 'form-select')}
                        id="cfService"
                        name="service"
                        required
                        defaultValue=""
                        aria-invalid={errors.cfService ? 'true' : 'false'}
                        onChange={() => clearError('cfService')}
                      >
                        <option value="" disabled>Select a service</option>
                        {SERVICE_OPTIONS.map((o) => (
                          <option value={o.value} key={o.value}>{o.label}</option>
                        ))}
                      </select>
                      <span className="error-text" data-error-for="cfService">Please select a service.</span>
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-label" htmlFor="cfBudget">Project Budget</label>
                      <select className="form-select" id="cfBudget" name="budget" defaultValue="not-decided">
                        {BUDGET_OPTIONS.map((o) => (
                          <option value={o.value} key={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 form-group">
                      <label className="form-label" htmlFor="cfMessage">Message <span className="req">*</span></label>
                      <textarea
                        className={fieldClass('cfMessage')}
                        id="cfMessage"
                        name="message"
                        rows="5"
                        placeholder="Tell us about your project, goals, and timeline..."
                        required
                        aria-invalid={errors.cfMessage ? 'true' : 'false'}
                        onInput={() => clearError('cfMessage')}
                      ></textarea>
                      <span className="error-text" data-error-for="cfMessage">Please describe your project briefly.</span>
                    </div>
                    <div className="col-12">
                      <button type="submit" className={`btn btn-gradient btn-lg w-100${submitting ? ' loading' : ''}`} id="cfSubmit" disabled={submitting}>
                        <span className={`submit-text${submitting ? ' d-none' : ''}`}>Send Enquiry <i className="bi bi-send" aria-hidden="true"></i></span>
                        <span className={`submit-loading${submitting ? '' : ' d-none'}`}>
                          <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> Sending...
                        </span>
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="text-muted small mb-0"><i className="bi bi-shield-lock me-1" aria-hidden="true"></i> Your information is safe with us and will only be used to respond to your enquiry.</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-head center reveal">
            <span className="section-label">What Happens Next</span>
            <h2 className="section-title">From Enquiry to <span className="text-gradient">Kickoff</span></h2>
          </div>
          <div className="row g-4">
            {CONTACT_STEPS.map((step, i) => (
              <div className={`col-md-4 reveal${i === 0 ? '' : ` reveal-delay-${i}`}`} key={step.num}>
                <WhyCard {...step} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
