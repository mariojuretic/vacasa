"use client";

import { useRef, useEffect } from "react";
import { Map } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

const accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
const styleUrl = process.env.NEXT_PUBLIC_MAPBOX_STYLE_URL;

export default function MapView() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map>();

  useEffect(() => {
    if (mapContainerRef.current) {
      mapRef.current = new Map({
        accessToken,
        style: styleUrl,
        container: mapContainerRef.current,
        center: [-0.1276, 51.5072],
        zoom: 10,
      });
    }
  }, []);

  return <div ref={mapContainerRef} className="h-full w-full" />;
}
