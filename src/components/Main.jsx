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
            width:null,
            longTerm:false
        }
        this.getLocation = this.getLocation.bind(this);
        this.getWeatherData = this.getWeatherData.bind(this);
        this.handelResize = this.handelResize.bind(this);
        this.showLongTerm = this.showLongTerm.bind(this);
        this.longTerm = this.longTerm.bind(this);
        this.getLocation();
    }

    componentDidMount(){
        this.setState({width: window.innerWidth})
        window.addEventListener("resize", this.handelResize)
        window.addEventListener("rotate", this.handelResize)
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handelResize)
        window.removeEventListener("rotate", this.handelResize)
    }

    handelResize(){
        if (window.innerWidth > 1000){
            this.setState({longTerm:false})
        }
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
        let res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=${1}&appid=${process.env.REACT_APP_API_KEY}`)
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

    showLongTerm(){
        this.setState({longTerm:!this.state.longTerm})
    }

    longTerm(){
        let width;
        let border = false
        if (!this.state.longTerm){
            if(this.state.width > 1000){
                width = "66%"
                border = true
            }else{
                width = "0%"
            }
        }else{
            width="100%"
        }
        return(
            <div style={{width:width, overflow:"auto", height:"100%"}}>
                <LongTerm data={this.state.weatherData.daily} border={border} showLongTerm={this.showLongTerm} longTerm={this.state.longTerm}></LongTerm>
            </div>
        )
    }

    render(){

        if (this.state.weatherData){
            return(
                <div style={{display:"flex", height:"100%"}}>
                    <div style={{width:this.state.width > 1000 ? "33%" : "96%", height:"90%", padding:"2%"}}>
                        <Header />
                        {!this.state.longTerm ? (
                        <div style={{overflow:"auto", height:"95%"}}>
                            <Current data={this.state.weatherData.current} tomorrow={this.state.weatherData.daily[1]} name={this.state.name}/>
                            <Future hourly={this.state.weatherData.hourly} daily={this.state.weatherData.daily} width={this.state.width} showLongTerm={this.showLongTerm}/>
                        </div>) : (
                            <this.longTerm></this.longTerm>
                        )}
                    </div>
                    {!this.state.longTerm ? <this.longTerm></this.longTerm> : null}
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