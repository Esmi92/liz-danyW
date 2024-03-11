import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '90%',
    height: '40vh',
};

const center = {
    lat: 18.888376778459268,
    lng: -99.1970657
};

const position = {
    lat: 18.888376778459268,
    lng: -99.1970657
};


const Map = () => {

    const ky = process.env.REACT_APP_KEY;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ky
    })


    return isLoaded && (
        <div className='map_container'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
            >
                <Marker
                    onLoad={() => console.log('Load')}
                    position={position}
                />
            </GoogleMap>
        </div>
    )
}

export default React.memo(Map)