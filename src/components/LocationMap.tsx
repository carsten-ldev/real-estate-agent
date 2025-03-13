"use client";

import Map, {Marker} from "react-map-gl/mapbox"
import { HiMapPin } from "react-icons/hi2";

export default function LocationMap({ mapboxToken, lat, long }: { mapboxToken: string,  lat: number, long: number }) {
    

    return (
        <Map
            mapboxAccessToken={ mapboxToken }
            initialViewState={{
                
                longitude: long,
                latitude: lat,
                zoom: 13.5
            }}
            style={{position: 'relative', width: '100%', height: '100%'}}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            
        >
            <Marker key={long} longitude={long} latitude={lat} >
                <HiMapPin size={48} color='green'/>
            </Marker>
        </Map> 
    )

}