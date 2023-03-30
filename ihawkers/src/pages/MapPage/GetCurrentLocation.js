/** 
* This function is a React component that retrieves the user's current geolocation using the browser's navigator API and sets the center of a map to the current location.
* @param {object} props - Props for the component.
* @param {function} props.setCenter - A function that sets the center of a map to the current location.
* @returns {null} This component doesn't return anything.
*/
import {useEffect} from "react";
/*
* This function gets the user's current location and sets the center of a map to it.
*/
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