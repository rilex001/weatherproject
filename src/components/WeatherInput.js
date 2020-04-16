import React from 'react'

const  WeatherInput = ({submit, change,  value})  => {
    return (
        <div>
              <form onSubmit={submit}>
                <input  id='wt' type='text' className="validate" onChange={change} value={value} />
                <label htmlFor='wt'>Enter a location</label>
              </form>
        </div>
    )
}
export default WeatherInput