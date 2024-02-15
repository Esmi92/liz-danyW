import logo from '../logov2.svg';
import Footer from './Footer';
import '../Page.css';

function SavetheDate() {
    return (
        <div className="LandingPage">
            <header className="welcome">
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                <p><b>SAVE THE DATE</b></p>
                    <p>¡Acompañanos en nuestro <br /> gran día!</p>
                    <p>28 . 09 . 24</p>
                    <div className='stdAdress'>Jiutepec, Morelos</div>
                  
                </div>
            </header>
            <Footer />
        </div>
    );
}

export default SavetheDate;