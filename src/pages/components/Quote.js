import logo from '../../logov2.svg'

export default function Quote() {

  return (
    <div className="QuoteDiv">
      <img src={logo} className="QuoteLogo" alt="logo" />
      <div>
        <p className="QuoteText">Cada Familia tiene una historia <br/> <b>Bienvenidos a la nuestra</b></p>
        <p className="QuoteAuthor"></p>
      </div>
    </div>
  )
}