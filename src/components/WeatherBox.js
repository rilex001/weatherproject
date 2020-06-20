import React from 'react'

const  WeatherBox = ({temperature, humidity, city, description, image})  => {
    let source = `http://openweathermap.org/img/wn/${image}@2x.png`
    if(temperature === null){
        return null;
    } else {
    return (
        <div>
        <div className='container'>
            <h2><b>{city}</b></h2>
            <h2>Temperature is: {temperature} &#8451; </h2>
            <h2>Humidity is: {humidity} %</h2>
            <h2>{description}</h2>
            <img src={source} alt='weather'></img>

        </div>
        </div>
    )
    }
}
export default WeatherBox