import useBackToTop from '../../hooks/useBackToTop'
import useWhatsApp from '../../hooks/useWhatsApp'

export default function FloatingActions() {
  useBackToTop()
  const { url: waUrl } = useWhatsApp()

  return (
    <div className="float-actions">
      <a className="wa-float" href={waUrl} target="_blank" rel="noopener" aria-label="Chat with Preyova Technologies on WhatsApp">
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
        <span className="wa-tip">Chat on WhatsApp</span>
      </a>
      <button type="button" className="back-top" id="backTop" aria-label="Scroll back to top">
        <i className="bi bi-arrow-up" aria-hidden="true"></i>
      </button>
    </div>
  )
}
