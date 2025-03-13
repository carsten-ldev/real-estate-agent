"use client";
import { useEffect, useRef } from "react";
import Map, {Marker, MapRef} from "react-map-gl/mapbox"
import { HiMapPin } from "react-icons/hi2";

export default function LocationMap({ mapboxToken, lat, long }: { mapboxToken: string,  lat: number, long: number }) {
    const mapRef = useRef<MapRef | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {

    if (!containerRef.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
        console.log('Map is visible');
        if (mapRef.current) {
          setTimeout(() => {
            mapRef.current?.resize();
          }, 5); // Small delay to allow layout to settle
        }

      }
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
    
  }, []);

    return (
        <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
        <Map
            ref={mapRef}
            mapboxAccessToken={ mapboxToken }
            style={{width: '100%', height: '100%', margin: 0, padding: 0}}
            initialViewState={{
                longitude: long,
                latitude: lat,
                zoom: 13.5
            }}
            mapStyle="mapbox://styles/mapbox/streets-v12"
            
        >
            <Marker key={long} longitude={long} latitude={lat} >
                <HiMapPin size={48} color='green'/>
            </Marker>
        </Map> 
        </div>
    )

}