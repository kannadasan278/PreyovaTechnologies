export default function ServiceMock({ mock }) {
  switch (mock.type) {
    case 'site':
      return (
        <div className="av-panel">
          <div className="pt-mock pt-site" style={{ margin: '.9rem' }}>
            <div className="hero-m"></div>
            <div className="lrow"><i className="fill"></i><i></i></div>
            <div className="lrow"><i></i><i></i></div>
          </div>
        </div>
      )
    case 'phone':
      return (
        <div className="av-panel d-flex justify-content-center">
          <div className="pt-phone" style={{ margin: '1.2rem' }}>
            <span className="cam"></span>
            <i className="a"></i>
            <i></i><i></i><i></i><i></i>
          </div>
        </div>
      )
    case 'dash':
      return (
        <div className="av-panel">
          <div className="pt-mock pt-dash" style={{ margin: '.9rem' }}>
            <div className="side">
              {Array.from({ length: mock.side }, (_, i) => (
                <i className={i === 0 ? 'on' : ''} key={i}></i>
              ))}
            </div>
            <div className="main">
              <div className="cards"><i></i><i></i><i></i></div>
              <div className="barx"></div>
            </div>
          </div>
        </div>
      )
    case 'store':
      return (
        <div className="av-panel">
          <div className="pt-mock pt-store" style={{ margin: '.9rem' }}>
            {mock.layout === 'ux' ? (
              <>
                <div className="col"><div className="prod"></div><div className="prod alt"></div></div>
                <div className="col"><div className="prod alt"></div><div className="prod"></div></div>
                <div className="col"><div className="prod"></div><div className="tline"></div></div>
              </>
            ) : (
              <>
                <div className="col"><div className="prod"></div><div className="prod"></div><div className="prod"></div></div>
                <div className="col"><div className="prod alt"></div><div className="prod alt"></div><div className="prod"></div></div>
                <div className="col"><div className="prod"></div><div className="tline"></div><div className="prod alt"></div></div>
              </>
            )}
          </div>
        </div>
      )
    case 'editor':
      return (
        <div className="av-panel">
          <div className="pt-mock pt-editor" style={{ margin: '.9rem' }}>
            <div><i>fetch</i>(<b>&apos;/api/payments&apos;</b>).then(<i>res</i> =&gt; {'{'}</div>
            <div>&nbsp;&nbsp;<i>return</i> <b>res</b>.json();</div>
            <div>{'}'}).catch(<i>err</i> =&gt; <b>handleError</b>(<b>err</b>));</div>
          </div>
        </div>
      )
    case 'table':
      return (
        <div className="av-panel">
          <div className="pt-mock pt-table" style={{ margin: '.9rem' }}>
            <div className="row"><i className="w60"></i><i className="chip ok"></i></div>
            <div className="row"><i className="w60"></i><i className="chip ok"></i></div>
            <div className="row"><i className="w60"></i><i className="chip warn"></i></div>
            <div className="row"><i className="w60"></i><i className="chip ok"></i></div>
          </div>
        </div>
      )
    default:
      return null
  }
}
