import React from 'react';
import WeatherBox from './components/WeatherBox'
import WeatherInput from './components/WeatherInput'
const api = {
  key: "1ef54449304b361e2ad2db02e1b38366",
  base: "https://api.openweathermap.org/data/2.5/"
}

class App extends React.Component {
  state = {
    temperature: null,
    humidity: '',
    location: '',
    description: '',
    image: '',
    apiname: ''
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
          console.log(result.weather[0].icon)

          const temperature = result.main.temp
          const humidity = result.main.humidity
          const apiname = result.name
          const description = result.weather[0].main
          const image = result.weather[0].icon
          this.setState({
            temperature,
            humidity,
            apiname,
            description,
            image
          })
        })
        .catch(err => {
          alert(err)
        })
       
  }

  render() {
    
    return (

<div className="app" >

  <section className='showcase'>
    <div className="video-container">
			<video src="https://traversymedia.com/downloads/video.mov" autoPlay muted loop></video>
    </div>

    <div className='content'>
    <h1>WEATHER API</h1>

          <WeatherInput submit={this.handleSubmit} change={this.handleChange} value={this.state.location}/>
          <WeatherBox 
            temperature={this.state.temperature} 
            humidity={this.state.humidity} 
            city={this.state.apiname}
            description={this.state.description}
            image={this.state.image}
          />
    </div>
  </section>      
     
      </div>
    );
  }
}

export default App;
