import React, { Component } from "react";
import Header from "./Header"
import Current from "./Current";
import Future from "./Future";
import LongTerm from "./LongTerm/LongTerm";

export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            weatherData:null,
            name:null,
            width:null
        }
        this.getLocation = this.getLocation.bind(this);
        this.getWeatherData = this.getWeatherData.bind(this);
        this.handelResize = this.handelResize.bind(this);
        this.getLocation();
    }

    componentDidMount(){
        this.setState({width: window.innerWidth})
        window.addEventListener("resize", this.handelResize)
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handelResize)
    }
    handelResize(){
        this.setState({
            width:window.innerWidth
        })
    }

    getLocation(){
        //this.getWeatherData({coords:{latitude:51.0365, longitude: -4.1799}})
        
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getWeatherData)
        }else{
            alert("no location")
        }
    }

    async getLocationData(position){
        let res = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=${1}&appid=${process.env.REACT_APP_API_KEY}`)
        let text = await res.text()
        let data = JSON.parse(text)
        let name = data[0]["name"]
        this.setState({name:name})
    }

    async getWeatherData(position){
        this.getLocationData(position)
        console.log(position)
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
                <div style={{display:"flex", height:"100%", overflow:"hidden"}}>
                    <div style={{width:this.state.width > 1000 ? "33%" : "96%", height:"96%", padding:"2%"}}>
                        <Header />
                        <div style={{overflow:"auto", height:"100%"}}>
                            <Current data={this.state.weatherData.current} tomorrow={this.state.weatherData.daily[1]} name={this.state.name}/>
                            <Future hourly={this.state.weatherData.hourly} daily={this.state.weatherData.daily} width={this.state.width}/>
                        </div>
                    </div>
                    <div style={{width:this.state.width > 1000 ? "66%" : "0%", overflow:"auto", height:"100%"}}>
                        <LongTerm data={this.state.weatherData.daily}></LongTerm>
                    </div>
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