import logo from '../../logov2.svg'

export default function Quote() {

  return (
    <div className="QuoteDiv">
      <img src={logo} className="QuoteLogo" alt="logo" />
      <div>
        <p className="QuoteText">"Lo mejor que puedes aprender en la vida es a amar y a ser amado de regreso"</p>
        <p className="QuoteAuthor">Anonimo</p>
      </div>
    </div>
  )
}