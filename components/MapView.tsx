"use client";

import { useRef, useEffect } from "react";
import { Map, Marker } from "mapbox-gl";
import getCenter from "geolib/es/getCenter";

import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  properties: Property[];
};

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const styleUrl = process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL;

export default function MapView({ properties }: Props) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map>();

  const coordinates = properties.map((property) => ({
    latitude: property.lat,
    longitude: property.long,
  }));

  const center = getCenter(coordinates);

  useEffect(() => {
    if (mapContainerRef.current && center) {
      mapRef.current = new Map({
        accessToken,
        style: styleUrl,
        container: mapContainerRef.current,
        center: [center.longitude, center.latitude],
        zoom: 12,
      });

      coordinates.map((coordinate) =>
        new Marker({ color: "#f43f5e" })
          .setLngLat([coordinate.longitude, coordinate.latitude])
          .addTo(mapRef.current!)
      );
    }

    return () => {
      mapRef.current?.remove();
    };
  }, [center, coordinates]);

  return <div ref={mapContainerRef} className="h-full w-full" />;
}
