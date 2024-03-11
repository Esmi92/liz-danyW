import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PaymentsIcon from '@mui/icons-material/Payments';
import Button from '@mui/material/Button';
import branch from '../../assets/branch.svg';

const mainColor = '#0b2c55';
const buttonColor = '#bb72a2';
const iconFontSize = "9vh";

const clickFunction = (url) => {
    window.open(url, "_blank");
};

// const liverpool = (
//     <Button variant="contained" fullWidth
//         size="large"
//         style={{
//             fontFamily: "Cormorant Garamond",
//             backgroundColor: buttonColor
//         }}>
//         <b>Liverpool</b>
//     </Button>
// );

const experiencias = (
    <Button variant="contained" fullWidth
        size="large"
        onClick={() => {
            const link = 'https://zepika.com/pages/boda-liz-dani';
            clickFunction(link)
        }}
        style={{
            fontFamily: "Cormorant Garamond",
            backgroundColor: buttonColor
        }}>
        <b>Zepika-Regalos</b>
    </Button>
);
const mesa = {
    title: 'Detalles para los novios',
    icon: <CardGiftcardIcon style={{ fontSize: iconFontSize, color: mainColor }}></CardGiftcardIcon>,
    description: <div className='giftButtons'>{experiencias}</div>,
}

const banco = {
    title: 'Fondo para casa',
    identifier: <>
        <p><b>Cuenta</b>: 279 563 9727</p>
        <p><b>CLABE</b>: 0121 8002 7956 397279</p>
    </>,
    icon: <PaymentsIcon style={{ fontSize: iconFontSize, color: mainColor }}></PaymentsIcon>,
    description: <p className='GiftText'><b>Banco</b>: BBVA <br /><b>Concepto</b>: Regalo Bodas <br></br> Porfavor incluye tu nombre en el concepto </p>,
    accountHolderName: <><b>Nombre</b>: Lizzete Geraldine Chávez Zaldívar</>
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