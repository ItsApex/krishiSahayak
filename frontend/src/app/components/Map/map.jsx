"use client";
// MapCard.js

import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./MapCard.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXBleDEyIiwiYSI6ImNsdDRnbW1vcDAycTYya291eXB6aGRhZm0ifQ.XRq3sqOfD0wrSZoJOCU5kw";

const MapCard = ({ onCoordinateClick }) => {
  const mapContainerRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) return;

    // Add event listener for click events on the map
    const handleClick = (e) => {
      const { lng, lat } = e.lngLat;
      const newCoordinate = [lng, lat];

      console.log("Clicked at:", newCoordinate);

      onCoordinateClick(newCoordinate);
    };

    map.on("click", handleClick);

    return () => map.off("click", handleClick);
  }, [map, onCoordinateClick]);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation is not supported by your browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        console.log("Latitude is :", latitude);
        console.log("Longitude is :", longitude);

        const mapInstance = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: "mapbox://styles/apex12/clt4h0ou600qf01qu7ikm13ew/",
          center: [longitude, latitude],
          zoom: 10,
        });

        setMap(mapInstance);
      },
      () => {
        console.log("Unable to retrieve your location");
      }
    );
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default MapCard;
