import React from 'react'

const  WeatherBox = ({temperature, humidity})  => {
    if(temperature === null){
        return null;
    } else {
    return (
        <div>
        <div className='container'>
            <h2>Temperature is: {temperature} &#8451; </h2>
            <h2>Humidity is: {humidity} %</h2>
        </div>
        </div>
    )
    }
}
export default WeatherBox