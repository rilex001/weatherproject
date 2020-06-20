import React from 'react'

const  WeatherInput = ({submit, change,  value})  => {
    return (
        <div>
              <form onSubmit={submit}>
                <input  
                  id='wt' 
                  type='text' 
                  className="locationinput" 
                  onChange={change} 
                  value={value} 
                  placeholder='Enter location'
                />
              </form>
        </div>
    )
}
export default WeatherInput