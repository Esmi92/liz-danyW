import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PaymentsIcon from '@mui/icons-material/Payments';
import branch from '../../assets/branch.svg';

const mainColor = '#073D69';
const iconFontSize = "9vh";

const mesa = {
    title: 'EMPRESA',
    identifier: 'Código: XXXXXX',
    icon: <CardGiftcardIcon style={{ fontSize: iconFontSize, color: mainColor }}></CardGiftcardIcon>,
    description: <p className='GiftText'>Nombre: Liz & Dany</p>,
}

const banco = {
    title: 'BANCO SA',
    identifier: 'CLABE: XXXX XXXX XXXX XXXX XX',
    icon: <PaymentsIcon style={{ fontSize: iconFontSize, color: mainColor }}></PaymentsIcon>,
    description: <p className='GiftText'>Concepto: Regalo Bodas <br></br> Porfavor incluye tu nombre en el concepto </p>,
    accountHolderName: 'Nombre: Lizzete',
}

export default function Gifts({ matches }) {

    const card = (obj) => {
        return (
            <div className="CardComponent">
                <div>{obj.icon}</div>
                <p className='GiftTitle'>{obj.title}</p>
                <p className='GiftText'>{obj.identifier}</p>
                {obj.accountHolderName ? <p className='GiftText'>{obj.accountHolderName}</p> : null}
                <div>{obj.description}</div>
            </div>
        )
    };

    return (
        <div>
            <div className='dynamicTitle'>
                <p className="SectionTitle">REGALOS</p>
                {matches && <img src={branch} className="dynamicImage" alt="logo" />}
            </div>
            <p className="giftsThanks">Muchas gracias por acompañarnos. Si quieres tener un detalle estas son las opciones que tenemos: </p>

            <div className='CardsSection'>
                {card(mesa)}
                {matches ? null : <img src={branch} className="GiftLogo" alt="logo" />}
                {card(banco)}
            </div>
        </div>
    )
}