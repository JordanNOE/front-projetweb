import React from 'react';
import Titles from './Titles';
import Form from './Form';
import Weather from './Weather'

const API_KEY = '9830bb67e56a9110471696df52451a70';

class Weathercomponent extends React.Component{
 
    
  state={
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;

    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&appid='+API_KEY+'&units=metric');
    const data = await api_call.json();
    
    if (city && country){
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity :data.main.humidity,
        description: data.weather[0].description,
        error : ""
  
  
      });
    }else{
      this.setState({
      temperature : undefined,
        city : undefined,
        country : undefined,
        humidity :undefined,
        description: undefined,
        error : "Please enter a value"
      });
    }
   
  }

  render() {
    return(
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather 
        temperature={this.state.temperature}
        city ={this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        description = {this.state.description}
        error= {this.state.error}

         />
      </div>
    );
  }

};

export default Weathercomponent;
