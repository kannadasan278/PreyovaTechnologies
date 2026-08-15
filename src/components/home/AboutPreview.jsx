import { Link } from 'react-router-dom'
import AboutVisual from '../sections/AboutVisual'
import { HOME_VALUES } from '../../data/home'

const ROWS = [
  { icon: 'bi-lightbulb', title: 'Innovation First', small: 'Ideas engineered into products' },
  { icon: 'bi-gem', title: 'Quality Driven', small: 'Clean, maintainable code' },
  { icon: 'bi-people', title: 'Client Focused', small: 'Success measured by outcomes' },
]

const CODE = (
  <>
    <b>// What we do</b><br />
    <i>const</i> preyova = {'{'}<br />
    &nbsp;&nbsp;expertise: [<span className="text-gradient" style={{ WebkitTextFillColor: '#22D3EE', color: '#22D3EE' }}>{`'web', 'mobile', 'cloud'`}</span>],<br />
    &nbsp;&nbsp;focus: <span style={{ color: '#6EE7B7' }}>{`'business growth'`}</span><br />
    {'}'};
  </>
)

export default function AboutPreview() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-lg-2">
            <div className="section-head reveal">
              <span className="section-label">About Preyova</span>
              <h2 className="section-title">Technology Built Around <span className="text-gradient">Your Business</span></h2>
              <p className="section-subtitle">At Preyova Technologies, we combine technology, creativity, and business understanding to build digital solutions that solve real-world challenges.</p>
            </div>
            <div className="row g-3 reveal reveal-delay-1">
              {HOME_VALUES.map((v) => (
                <div className="col-sm-6" key={v.title}>
                  <div className="value-card">
                    <div className="v-icon"><i className={`bi ${v.icon}`} aria-hidden="true"></i></div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 reveal reveal-delay-2">
              <Link to="/about" className="btn btn-navy">More About Us <i className="bi bi-arrow-right"></i></Link>
            </div>
          </div>

          <div className="col-lg-6 order-lg-1">
            <AboutVisual
              rows={ROWS}
              badgeIcon="bi-rocket-takeoff"
              badgeText="Ideas → Products"
              code={CODE}
              className="reveal reveal-left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
