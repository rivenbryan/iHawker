import React, {useState, useEffect} from "react";
import { useGeolocated } from "react-geolocated";
// const GetCurrentLocation = ({setCenter}) => {
//     const { coords, isGeolocationAvailable, isGeolocationEnabled } =
//         useGeolocated({
//             positionOptions: {
//                 enableHighAccuracy: false,
//             },
//             userDecisionTimeout: 5000,
//         });
        
//     if (coords){
//         setCenter({
//             lat: coords.latitude,
//             lng: coords.longitude
//         })
//     }
//     return !isGeolocationAvailable ? (
//         <div>Your browser does not support Geolocation</div>
//     ) : !isGeolocationEnabled ? (
//         <div>Geolocation is not enabled</div>
//     ) : coords ? (
//         <div></div>
//     ) : (
//         <div></div>
//     );
// };

const GetCurrentLocation = ({setCenter}) => {
    useEffect( ()=> {
        getLocationJs()

    }, [])
    const getLocationJs = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          const { latitude, longitude } = position.coords;
          setCenter({
                        lat: latitude,
                        lng: longitude
                    })
        });
      };
} 
export default GetCurrentLocation;