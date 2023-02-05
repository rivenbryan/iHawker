import {useEffect} from "react";

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