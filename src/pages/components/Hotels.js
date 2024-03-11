
import Divider from '@mui/material/Divider';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import branch from '../../assets/branch.svg';

const mainColor = '#9D7F63';

export default function Hotels({ matches }) {
    const dividerWidth = matches ? "80%" : "80%";
    const lasQuintas = {
        tel: '777-420-5922 / 777-362-3949',
        pag: 'https://hosterialasquintas.com.mx/',
        loc: 'https://maps.app.goo.gl/r1Bt4X3K8rc2p9PEA'
    };
    const sumiya = {
        tel: '777-329-9888',
        pag: 'https://www.hotelsumiya.com/',
        loc: 'https://maps.app.goo.gl/KEtNzx8dP7iTkD1f9'
    };

    const rioMayo = {
        tel: ' 777-316-1616',
        loc: 'https://maps.app.goo.gl/yLid5As3p8SEZ6tf9'
    };

    const quintaE = {
        tel: '777-313-8880 /998-243-3093',
        pag: 'https://www.hotelquintaelvira.com/',
        loc: 'https://maps.app.goo.gl/otqskYMxt7wdAH1X9'
    };

    const misionSol = {
        tel: '777-349-7962',
        pag: 'http://www.misiondelsol.com/',
        loc: 'https://maps.app.goo.gl/bSNHQN9aKw2Bd1ZU8'
    };

    const cortes = {
        tel: '777-315-8844 / 800-220-7697',
        pag: 'https://hotelhaciendadecortes.com.mx/',
        loc: 'https://maps.app.goo.gl/bjU8Z8p63W2reVZs7'
    };

    const one = {
        tel: '777-236-3404',
        loc: 'https://maps.app.goo.gl/2Ki9wv1NP2BjBDn57'
    };

    const huayacan = {
        tel: '777-516-1010 /777-319-0639',
        pag: 'https://hotelhuayacan.com/',
        loc: 'https://maps.app.goo.gl/UFutQKmFnG5gpWnE7'
    };

    const onClick = (url) => {
        window.open(url, "_blank");
    };


    const textoReserva = (tel, hotelPage, hotelLocation, showPage, whats) => {
        return (
            <div className='HotelText'>
                <p style={{ margin: '0' }}>
                    <b>{whats ? 'WhatsApp' : 'Teléfono'}:</b> {`${tel}`} </p>
                <div>
                    {showPage &&
                        (<Tooltip title="Pagina">
                            <IconButton onClick={() => { onClick(hotelPage) }}>
                                <PublicIcon style={{ fontSize: "4.5vh", color: mainColor }} />
                            </IconButton>
                        </Tooltip>)
                    }
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
                {matches && <img src={branch} className="dynamicImage" alt="logo" />}
                <p className="SectionTitle"> <b>SUGERENCIAS DE HOSPEDAJE</b>
                </p>
                {matches && <img src={branch} className="dynamicImage dynamicImageRotate" alt="logo" />}
            </div>
            <div className='HotelsDescription'>
                <p>Para facilitar tu estancia existen los siguientes hoteles cercanos:</p>
            </div>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
            <div className="HotelsSections">
                <div className='HotelDetailsContainer'>
                    <div className='HotelsDescription HotelDetailsContainer'>
                        <p>
                            <b>Hosteria las quintas</b>
                        </p>
                        {textoReserva(lasQuintas.tel, lasQuintas.pag, lasQuintas.loc, true)}
                    </div>
                    <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
                    <div className='HotelsDescription HotelDetailsContainer'>
                        <p>
                            <b>Hotel Sumiya</b>
                        </p>
                        {textoReserva(sumiya.tel, sumiya.pag, sumiya.loc, true)}
                    </div>

                    <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
                    <div className='HotelsDescription HotelDetailsContainer'>
                        <p>
                            <b>Hotel Rio Mayo</b>
                        </p>
                        {textoReserva(rioMayo.tel, null, rioMayo.loc, false)}
                    </div>
                    <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
                    <div className='HotelsDescription HotelDetailsContainer'>
                        <p>
                            <b>Hotel One Cuernavaca</b>
                        </p>
                        {textoReserva(one.tel, null, one.loc, false)}
                    </div>
                </div>

                {matches
                    ? <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
                    :
                    <img src={branch} className="GiftLogo" alt="logo" />}
                <div className='HotelDetailsContainer'>
                    <div className='HotelsDescription HotelDetailsContainer'>
                        <p>
                            <b>Hotel Misión del Sol</b>
                        </p>
                        {textoReserva(misionSol.tel, misionSol.pag, misionSol.loc, true, true)}
                    </div>
                    <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
                    <div className='HotelsDescription HotelDetailsContainer'>
                        <p>
                            <b>Quinta Elvira, Hotel Boutique</b>
                        </p>
                        {textoReserva(quintaE.tel, quintaE.pag, quintaE.loc, true)}
                    </div>
                    <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
                    <div className='HotelsDescription HotelDetailsContainer'>
                        <p>
                            <b>Hotel Hacienda de Cortes</b>
                        </p>
                        {textoReserva(cortes.tel, cortes.pag, cortes.loc, true)}
                    </div>
                    <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor, width: dividerWidth }} />
                    <div className='HotelsDescription HotelDetailsContainer'>
                        <p>
                            <b>Hotel Huayacan</b>
                        </p>
                        {textoReserva(huayacan.tel, huayacan.pag, huayacan.loc, true)}
                    </div>
                </div>
            </div>
        </div>
    )
}