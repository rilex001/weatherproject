import React from 'react';
import axios from 'axios';
const api = {
  key: "1ef54449304b361e2ad2db02e1b38366",
  base: "https://api.openweathermap.org/data/2.5/"
}

class App extends React.Component {
  state = {
    temperature: '',
    humidity: '',
    location: ''
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    
  }
  handleChange = (e) =>{
    this.setState({
      location: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${api.base}weather?q=${this.state.location}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          const temperature = result.main.temp
          const humidity = result.main.humidity
          this.setState({
            temperature,
            humidity
          })
        });
       
  }

  render() {
    return (
      <div className="app" >
        <div className='container center'>
          <h1 className="heading">WEATHER API PROJECT</h1>
          <p>Enter a location and get information about temeprature and humidity</p>
            <div className="input-field">
              <form onSubmit={this.handleSubmit}>
                <input id='wt' type='text' className="validate green accent-1" onChange={this.handleChange} value={this.state.location} />
              </form>
            </div>


           <div className='container'>
            <h2>Temperature is: {this.state.temperature} C</h2>
            <h2>Humidity is: {this.state.humidity} %</h2>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
