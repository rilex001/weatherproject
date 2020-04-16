import React from 'react'

const  WeatherBox = ({temperature, humidity})  => {
    return (
        <div>
        <div className='container'>
            <h2>Temperature is: <pre></pre>{temperature}  C</h2>
            <h2>Humidity is:<pre></pre> {humidity} %</h2>
        </div>
        </div>
    )
}
export default WeatherBox