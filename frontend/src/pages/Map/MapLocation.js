import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Map.css";

export default function MapLocation() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDwuMcYFcvOtLU8MxBLdBYvxVdhKBZzS3I",
  });

  const center = useMemo(() => ({ lat: 6.93197, lng: 79.85775 }), []);

  if (!isLoaded) return <div>Loading...........</div>;

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center}></Marker>
    </GoogleMap>
  );
}
