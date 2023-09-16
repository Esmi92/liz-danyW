
import Divider from '@mui/material/Divider';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import branch from '../../assets/branch.svg';

const mainColor = '#073D69';

export default function Hotels({ matches }) {
    const dividerWidth = matches ? "80%" : "80%";
    const tel1 = '4444444 444';
    const tel2 = '66666 6666';
    const email1 = 'hotel1@mail.com';
    const email2 = 'hotel2@mail.com';
    const hotelPage1 = 'https://www.misiondelsol.com/';
    const hotelPage2 = 'https://www.misiondelsol.com/';
    const map1 = 'https://goo.gl/maps/UrAh5xewSb1dr6Wb7';
    const map2 = 'https://goo.gl/maps/UrAh5xewSb1dr6Wb7';

    const onClick = (url) => {
        window.open(url, "_blank");
    };


    const textoReserva = (tel, email, hotelPage, hotelLocation) => {
        return (
            <div className='HotelText'>
                <p style={{ margin: '0' }}>Las reservaciones deberán ser realizadas  <br /> por alguno de los siguientes medios:<br />
                    <b>Teléfono:</b> {`${tel}`} <br />
                    <b>Correo:</b> {`${email}`}<br /> </p>
                <br />
                <div>
                    <Tooltip title="Pagina">
                        <IconButton onClick={() => { onClick(hotelPage) }}>
                            <PublicIcon style={{ fontSize: "4.5vh", color: mainColor }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Maps">
                        <IconButton onClick={() => { onClick(hotelLocation) }}>
                            <LocationOnIcon style={{ fontSize: "4.5vh", color: mainColor }} />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        )
    };

    return (
        <div className='Hotels'>
            <div className='dynamicTitle'>
                <p className="SectionTitle">HOSPEDAJE</p>
                {matches && <img src={branch} className="dynamicImage" alt="logo" />}
            </div>
            <div className='HotelsDescription'>
                <p>Para facilitar tu estancia tenemos convenio con los siguientes hoteles:</p>
                <p>Mencionar el código de reservación:<br />
                    <b>Liz y Daniel</b> </p>
            </div>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
            <div className="HotelsSections">
                <div className='HotelsDescription HotelDetailsContainer'>
                    <p>
                        <b>Hotel1</b><br />
                        Jiutepec 476,<br /> Jose G. Parres,<br />62564 Jiutepec, Mor<br />
                    </p>
                    {textoReserva(tel1, email1, hotelPage1, map1)}
                </div>
                {matches
                    ? <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
                    :
                    <img src={branch} className="GiftLogo" alt="logo" />}
                <div className='HotelsDescription HotelDetailsContainer'>
                    <p>
                        <b>Hotel2</b> <br />
                        Jiutepec 476,<br /> Jose G. Parres,<br />62564 Jiutepec, Mor<br />
                    </p>
                    {textoReserva(tel2, email2, hotelPage2, map2)}
                </div>

            </div>
        </div>
    )
}