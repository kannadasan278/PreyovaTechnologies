import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageHero from '../components/layout/PageHero'
import CtaPanel from '../components/layout/CtaPanel'
import { BLOG_POSTS } from '../data/blog'

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug)
  const prev = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null
  const next = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null

  return (
    <>
      <Helmet>
        <title>{post.title} | Preyova Technologies Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`https://www.preyova.in/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>

      <PageHero
        label={post.category}
        title={post.title}
        lead={post.excerpt}
        current={post.title}
      />

      <section className="section">
        <div className="container">
          <div className="blog-detail">
            <div className="blog-detail-meta">
              <span className="blog-detail-category">
                <i className={`bi ${post.icon}`} aria-hidden="true"></i> {post.category}
              </span>
              <span className="blog-detail-date">
                <i className="bi bi-calendar3" aria-hidden="true"></i> {post.date}
              </span>
              <span className="blog-detail-read">
                <i className="bi bi-clock" aria-hidden="true"></i> {post.readTime}
              </span>
            </div>

            <div className="blog-detail-content">
              {post.content.map((section, i) => (
                <div className="blog-detail-section" key={i}>
                  <h2 className="blog-detail-heading">{section.heading}</h2>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>

            <div className="blog-detail-tags">
              {post.tags.map((tag) => (
                <span className="blog-detail-tag" key={tag}>{tag}</span>
              ))}
            </div>

            <div className="blog-detail-nav">
              {prev ? (
                <Link to={`/blog/${prev.slug}`} className="blog-detail-nav-link blog-detail-prev">
                  <span className="blog-detail-nav-label"><i className="bi bi-arrow-left"></i> Previous</span>
                  <span className="blog-detail-nav-title">{prev.title}</span>
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/blog/${next.slug}`} className="blog-detail-nav-link blog-detail-next">
                  <span className="blog-detail-nav-label">Next <i className="bi bi-arrow-right"></i></span>
                  <span className="blog-detail-nav-title">{next.title}</span>
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tinted">
        <div className="container">
          <div className="section-head center reveal">
            <span className="section-label">More Articles</span>
            <h2 className="section-title">Read <span className="text-gradient">More</span></h2>
          </div>
          <div className="row g-4">
            {BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3).map((p, i) => (
              <div className={`col-md-4 reveal${i === 0 ? '' : ` reveal-delay-${i + 1}`}`} key={p.id}>
                <div className="blog-card">
                  <div className="blog-card-icon">
                    <i className={`bi ${p.icon}`} aria-hidden="true"></i>
                  </div>
                  <span className="blog-card-category">{p.category}</span>
                  <h3 className="blog-card-title">{p.title}</h3>
                  <p className="blog-card-excerpt">{p.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-date">{p.date}</span>
                    <Link to={`/blog/${p.slug}`} className="blog-card-link">Read More <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaPanel
        orb="orb-1"
        title={<>Enjoyed This Article? Let&apos;s <span className="text-gradient">Talk Tech</span></>}
        subtitle="Have a question or want to discuss a project? We are always happy to connect."
        buttonLabel="Get in Touch"
      />
    </>
  )
}
