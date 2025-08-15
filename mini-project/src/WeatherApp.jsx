import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import "./WeatherApp.css"
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({  
        city: "Nagpur",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 24.04,
        tempMax: 26.89,
        humidity: 47,
        weather : "haze",
    });
    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}} className="WeatherApp">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}