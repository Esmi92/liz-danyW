import { MainLogo } from "./MainLogo"

export default function Quote() {

  return (
    <div className="QuoteDiv">
      <MainLogo />
      <div>
        <p className="QuoteText">Cada Familia tiene una historia <br /> <b>Bienvenidos a la nuestra</b></p>
        <p className="QuoteAuthor"></p>
      </div>
    </div>
  )
}