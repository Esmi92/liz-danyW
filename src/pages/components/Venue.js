import Map from './Map';
import VenuePhotoURL1 from '../../assets/venue1.PNG';
import VenuePhotoURL2 from '../../assets/venue2.PNG';
import VenuePhotoURL3 from '../../assets/venue3.PNG';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ChurchIcon from '@mui/icons-material/Church';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import puntaLuna from '../../assets/LogoPuntaLuna.svg'

const mainColor = '#9D7F63';
const pagina = 'https://grupoparaiso.mx/punta-luna/'
const maps = "https://goo.gl/maps/T2m1H9T3hVWK7vVN9";
const intagram = "https://instagram.com/puntaluna.grupoparaiso?igshid=MzRlODBiNWFlZA==";

const onClick = (type) => {
    if (type === "map") {
        window.open(maps, "_blank");
    } else if (type === "page") {
        window.open(pagina, "_blank");
    } else {
        window.open(intagram, "_blank");
    }
};

function CarouselCard(props) {
    return (
        <div>
            <img className='photos' alt="Hacienda Vista Hermosa" src={props.img} />
        </div >
    )
}
function Itinerary() {

    return (
        <div>
            <p className='VenueTitle'><b>SABADO 28</b><br /> Jardín Punta Luna</p>
            <Grid container justifyContent="center" alignItems="center" style={{ padding: 30 }}>
                <Grid xs={8} className='VenueData Itinerary' item>
                    <b>Ceremonia <br /></b>
                    3:00pm
                </Grid>
                <Grid xs={4} item>
                    <ChurchIcon style={{ fontSize: "9vh", color: mainColor }} />
                </Grid>
            </Grid>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor }} />
            <Grid container justifyContent="center" alignItems="center" style={{ padding: 30 }}>
                <Grid xs={8} item>
                    <div className='VenueData Itinerary'>
                        <b>Coctel<br /></b>
                        4.00pm
                    </div>
                </Grid>
                <Grid xs={4} item>
                    <LocalBarIcon style={{ fontSize: "9vh", color: mainColor }} />
                </Grid>
            </Grid>

        </div >
    )
}

export default function VenueComponent({ matches }) {
    return (
        <div className='VenueComponent'>
            <div className='itinerarySection'>
                <div className='address'>
                    <div className='VenueDescriptionContainer'>
                        <img src={puntaLuna} className="puntaLunaLogo" alt="puntaLuna" />
                        <p className='VenueDescription'>
                            <b>Punta Luna by Grupo Paraiso</b><br />
                        </p>
                        <p className='VenueDetails'>
                            <div>Jiutepec 476,<br /> Jose G. Parres,<br />62564 Jiutepec, Mor</div><br />
                        </p>
                        <div>
                            <Tooltip title="Instagram">
                                <IconButton onClick={onClick}>
                                    <InstagramIcon style={{ fontSize: "6vh", color: mainColor }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Maps">
                                <IconButton onClick={() => { onClick("map") }}>
                                    <LocationOnIcon style={{ fontSize: "6vh", color: mainColor }} />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    {!matches ? <Map /> : ''}

                </div>
            </div>
            <Divider style={{ marginBottom: 15, marginTop: 15 }} variant='middle' />
            <div className='itinerarySection'>
                <div className='itineraryandCarousel'>
                    <Itinerary />
                </div>
                <div className='itineraryandCarousel carousel'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay
                        modules={[Autoplay]}
                    >
                        <SwiperSlide><CarouselCard img={VenuePhotoURL1} /></SwiperSlide>
                        <SwiperSlide><CarouselCard img={VenuePhotoURL2} /></SwiperSlide>
                        <SwiperSlide><CarouselCard img={VenuePhotoURL3} /></SwiperSlide>
                    </Swiper>
                </div>
            </div>

        </div>
    )
}