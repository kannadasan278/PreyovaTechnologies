import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'
import { BLOG_POSTS } from '../data/blog'

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog | Insights &amp; Tech Articles | Preyova Technologies</title>
        <meta name="description" content="Read the latest insights, tutorials, and technology articles from Preyova Technologies — covering web development, mobile apps, cloud, security, and software engineering." />
        <meta name="keywords" content="tech blog, software development articles, web development, mobile apps, cloud deployment, Preyova Technologies" />
        <link rel="canonical" href="https://www.preyova.in/blog" />
      </Helmet>

      <PageHero
        label="Blog"
        title={<>Insights &amp; <span className="text-gradient">Tech Articles</span></>}
        lead="Thoughts on engineering, technology, and building software that makes a difference."
        current="Blog"
      />

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {BLOG_POSTS.map((post, i) => (
              <div className={`col-md-6 col-lg-4 reveal${i === 0 ? '' : ` reveal-delay-${Math.min(i, 3)}`}`} key={post.id}>
                <div className="blog-card">
                  <div className="blog-card-icon">
                    <i className={`bi ${post.icon}`} aria-hidden="true"></i>
                  </div>
                  <span className="blog-card-category">{post.category}</span>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-date">{post.date}</span>
                    <Link to={`/blog/${post.slug}`} className="blog-card-link">Read More <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5 reveal">
            <p className="text-muted mb-3">More articles coming soon. Have a topic suggestion?</p>
            <Link to="/contact" className="btn btn-gradient">Get in Touch <i className="bi bi-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      <CtaPanel
        title={<>Enjoyed This? Let&apos;s <span className="text-gradient">Build Something</span></>}
        subtitle="Whether you need a technical partner or just want to discuss an idea — we are here."
        buttonLabel="Start a Project"
      />
    </>
  )
}
