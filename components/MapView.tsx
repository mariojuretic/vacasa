"use client";

import Map, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  properties: Property[];
};

export default function MapView({ properties }: Props) {
  const coordinates = properties.map((property) => ({
    latitude: property.lat,
    longitude: property.long,
  }));

  const center = getCenter(coordinates);
  if (!center) return null;

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL}
      initialViewState={{
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 12,
      }}
    >
      {properties.map((property) => (
        <Marker
          key={property.image}
          latitude={property.lat}
          longitude={property.long}
          anchor="bottom"
          color="#f43f5e"
        />
      ))}
    </Map>
  );
}
