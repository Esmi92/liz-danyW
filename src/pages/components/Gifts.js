import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PaymentsIcon from '@mui/icons-material/Payments';
import Button from '@mui/material/Button';
import branch from '../../assets/branch.svg';

const mainColor = '#0b2c55';
const buttonColor = '#bb72a2';
const iconFontSize = "9vh";

const liverpool = (
    <Button variant="contained" fullWidth
    size="large"
    style={{
        fontFamily: "Cormorant Garamond",
        backgroundColor: buttonColor
    }}>
   <b>Liverpool</b> 
</Button>
);

const experiencias = (
    <Button variant="contained" fullWidth
    size="large"
    style={{
        fontFamily: "Cormorant Garamond",
        backgroundColor: buttonColor
    }}>
    <b>Experiencias</b>
</Button>
);
const mesa = {
    title: 'Regalos',
    icon: <CardGiftcardIcon style={{ fontSize: iconFontSize, color: mainColor }}></CardGiftcardIcon>,
    description: <div className='giftButtons'>{liverpool}{experiencias}</div>,
}

const banco = {
    title: 'Fondo para casa',
    identifier: 'CLABE: XXXX XXXX XXXX XXXX XX',
    icon: <PaymentsIcon style={{ fontSize: iconFontSize, color: mainColor }}></PaymentsIcon>,
    description: <p className='GiftText'>Banco: BBVA <br/>Concepto: Regalo Bodas <br></br> Porfavor incluye tu nombre en el concepto </p>,
    accountHolderName: 'Nombre: Lizzete',
}

export default function Gifts({ matches }) {

    const card = (obj) => {
        return (
            <div className="CardComponent">
                <div>{obj.icon}</div>
                <p className='GiftTitle'><b>{obj.title}</b></p>
                <p className='GiftText'>{obj.identifier}</p>
                {obj.accountHolderName ? <p className='GiftText'>{obj.accountHolderName}</p> : null}
                {obj.description}
            </div>
        )
    };

    return (
        <div>
            <div className='dynamicTitle'>
            {matches && <img src={branch} className="dynamicImage" alt="logo" />}
                <p className="SectionTitle"><b>REGALOS</b></p>
                {matches && <img src={branch} className="dynamicImage dynamicImageRotate" alt="logo" />}
            </div>
            <p className="giftsThanks">Si bien su presencia es nuestro regalo más grande, para aquellos que deseen hacer algo extra, tenemos las siguientes opciones. </p>

            <div className='CardsSection'>
                {card(mesa)}
                {matches ? null : <img src={branch} className="GiftLogo" alt="logo" />}
                {card(banco)}
            </div>
        </div>
    )
}