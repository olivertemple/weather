import React, { Component } from "react";
import Header from "./Header"
import Current from "./Current";
import Future from "./Future";
export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            weatherData:null
        }
        this.getLocation = this.getLocation.bind(this);
        this.getWeatherData = this.getWeatherData.bind(this);
        this.getLocation();
    }

    getLocation(){
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getWeatherData)
        }else{
            alert("no location")
        }
    }

    async getWeatherData(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude
        let res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        let text = await res.text()
        let data = JSON.parse(text)
        console.log(data)
        this.setState({
            weatherData:data
        })
    }

    render(){
        if (this.state.weatherData){
            return(
                <div style={{width:"50%"}}>
                    <Header />
                    <Current data={this.state.weatherData.current} tomorrow={this.state.weatherData.daily[1]}/>
                    <Future hourly={this.state.weatherData.hourly} daily={this.state.weatherData.daily}/>
                </div>
            )
        }else{
            return(
                <div>
                    <h1>loading</h1>
                </div>
            )
        }
        
    }
}