import React from "react";
import { useGeolocated } from "react-geolocated";
const GetCurrentLocation = ({setCenter}) => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
    

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        setCenter({
            lat: coords.latitude,
            lng: coords.longitude
        })
    ) : (
        <div></div>
    );
};

export default GetCurrentLocation;