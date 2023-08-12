import Map from './Map';
import VenuePhotoURL1 from '../../assets/venue1.PNG';
import VenuePhotoURL2 from '../../assets/venue2.PNG';
import VenuePhotoURL3 from '../../assets/venue3.PNG';

import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ChurchIcon from '@mui/icons-material/Church';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import FlatwareIcon from '@mui/icons-material/Flatware';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const mainColor = '#073D69';
const maps = "https://goo.gl/maps/T2m1H9T3hVWK7vVN9";
const intagram = "https://instagram.com/puntaluna.grupoparaiso?igshid=MzRlODBiNWFlZA==";

const onClick = (type) => {
    if (type == "map") {
        window.open(maps, "_blank");
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
            <p className='VenueTitle'>SABADO 28</p>
            <Grid container justifyContent="center" alignItems="center" style={{ padding: 30 }}>
                <Grid xs={8} className='VenueDescription Itinerary'>
                    <b>Misa <br /></b>
                    localidad <br />
                    5:30pm
                </Grid>
                <Grid xs={4}>
                    <ChurchIcon style={{ fontSize: "9vh", color: mainColor }} />
                </Grid>
            </Grid>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor }} />
            <Grid container justifyContent="center" alignItems="center" style={{ padding: 30 }}>
                <Grid xs={8} >
                    <div className='VenueDescription Itinerary'>
                        <b>Recepción<br /></b>
                        localidad<br />
                        hora
                    </div>
                </Grid>
                <Grid xs={4}>
                    <LocalBarIcon style={{ fontSize: "9vh", color: mainColor }} />
                </Grid>
            </Grid>
            <Divider variant='middle' style={{ borderWidth: 1, borderColor: mainColor }} />
            <Grid container justifyContent="center" alignItems="center" style={{ padding: 30 }}>
                <Grid xs={8} className='VenueDescription Itinerary'>
                    <b >Cena</b> <br />
                    Localidad<br />
                    hora
                </Grid>
                <Grid xs={4}>
                    <FlatwareIcon style={{ fontSize: "9vh", color: mainColor }} />
                </Grid>
            </Grid>
        </div >
    )
}

export default function VenueComponent({ matches }) {
    return (
        <div className='VenueComponent'>
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
            <Divider style={{ marginBottom: 15, marginTop: 15 }} variant='middle' />

            <div className='address'>
                <div className='VenueDescriptionContainer'>
                    <p className='VenueDescription'>
                        <b>Punta Luna by Grupo Paraiso</b><br />
                        Jiutepec 476,<br /> Jose G. Parres,<br />62564 Jiutepec, Mor<br />
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
    )
}