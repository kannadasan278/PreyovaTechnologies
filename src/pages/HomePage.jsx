import { Helmet } from 'react-helmet-async'
import CtaPanel from '../components/layout/CtaPanel'
import Hero2026 from '../components/home/Hero2026'
import TrustBar from '../components/home/TrustBar'
import AboutPreview from '../components/home/AboutPreview'
import ServiceCards from '../components/home/ServiceCards'
import SolutionCards from '../components/home/SolutionCards'
import Technologies from '../components/home/Technologies'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ProcessSteps from '../components/home/ProcessSteps'
import PortfolioPreview from '../components/home/PortfolioPreview'
import Testimonials from '../components/home/Testimonials'
import FaqAccordion from '../components/home/FaqAccordion'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Preyova Technologies | IT Software &amp; Digital Solutions</title>
        <meta name="description" content="Preyova Technologies builds modern software, web, mobile, e-commerce and digital solutions for growing businesses. Web development, mobile apps, custom software & more." />
        <meta name="keywords" content="software company, IT solutions, web development, mobile app development, custom software, e-commerce solutions, Chennai, Preyova Technologies" />
        <link rel="canonical" href="https://www.preyova.in/" />
      </Helmet>

      <Hero2026 />
      <TrustBar />
      <AboutPreview />
      <ServiceCards />
      <SolutionCards />
      <Technologies />
      <WhyChooseUs />
      <ProcessSteps />
      <PortfolioPreview />
      {/* <Testimonials /> */}
      <FaqAccordion />

      {/* <section className="section" aria-label="Call to action">
        <div className="container">
          <CtaPanel
            badge="Let's Collaborate"
            title={<>Have an Idea? Let&apos;s Build It <span className="text-gradient">Together.</span></>}
            subtitle="Tell us about your business challenge, product idea, or technology requirement. Our team will help you shape it into a scalable solution."
            buttonLabel="Start a Conversation"
            image={{ src: '/images/cta-idea.png', alt: 'Illustration of a product idea coming to life', width: 900, height: 640 }}
          />
        </div>
      </section> */}
    </>
  )
}
