import React, { Component } from "react";
import Header from "./Header"
import Current from "./Current";
import Future from "./Future";
import LongTerm from "./LongTerm/LongTerm";
import Menu from "./Menu/Menu";

export default class Main extends Component{
    constructor(props){
        super(props)

        let active = localStorage.active

        this.state = {
            weatherData:null,
            name:null,
            width:window.innerWidth,
            longTerm:false,
            menu:false,
            active: active ? JSON.parse(active) : "location"
        }

        this.getLocation = this.getLocation.bind(this);
        this.getWeatherData = this.getWeatherData.bind(this);
        this.handelResize = this.handelResize.bind(this);
        this.showLongTerm = this.showLongTerm.bind(this);
        this.longTerm = this.longTerm.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.getWeatherDataForCity = this.getWeatherDataForCity.bind(this);
        this.setActive = this.setActive.bind(this);
        this.handelClick = this.handelClick.bind(this);
        this.getLocation();

    }

    componentDidMount(){
        window.addEventListener("resize", this.handelResize)
        window.addEventListener("rotate", this.handelResize)
        window.addEventListener("click", (e => {this.handelClick(e)}))
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.handelResize)
        window.removeEventListener("rotate", this.handelResize)
        window.removeEventListener("click", (e => {this.handelClick(e)}))
    }

    handelClick(e){
        console.log(e)
        let x = e.clientX;
        let y = e.clientY;

        let menu = document.getElementById("menu");
        let menuDetails = menu.getBoundingClientRect();
        if (x < menuDetails.width && y < menuDetails.height){
            return null
        }else{
            let menu = document.getElementById("menu expand")
            if (this.state.menu && e.target != menu){
                this.toggleMenu()
            }
        }
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
        console.log(this.state)
        if (this.state.active === "location"){
            //this.getWeatherData({coords:{latitude:51.0365, longitude: -4.1799}})
            
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(this.getWeatherData)
            }else{
                alert("no location")
            }
        }else{
            this.getWeatherDataForCity(this.state.active);
        }
        
    }

    setActive(location){
        console.log(location)
        this.setState({active:location}, () => {
            this.getLocation()
        })
        localStorage.active = JSON.stringify(location)

    }

    async getWeatherDataForCity(location){
        let res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location.city},${location.state},${location.country}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
        let text = await res.text();
        let data = await JSON.parse(text)
        if (data.length > 0){
            this.getWeatherData({coords:{longitude:data[0].lon, latitude:data[0].lat}})
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
        console.log(position)
        this.getLocationData(position)
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

    toggleMenu(){
        console.log("here")
        this.setState({menu:!this.state.menu})
    }


    render(){

        if (this.state.weatherData){
            return(
                <div className="App" style={{display:"flex", height:"100%", backgroundColor:!this.state.longTerm ? "#10103B" : "#F3FBFF", color:!this.state.longTerm ? "white" : "#10103B"}}>
                    <Menu toggleMenu={this.toggleMenu} show={this.state.menu} setActive={this.setActive}></Menu>
                    <div style={{width:this.state.width > 1000 ? "33%" : "96%", height:"90%", padding:"2%"}}>
                        <Header menu={this.state.menu} invert={!this.state.longTerm} toggleMenu={this.toggleMenu}/>
                        {!this.state.longTerm ? (
                        <div style={{overflow:"auto", height:"95%"}}>
                            <Current data={this.state.weatherData.current} tomorrow={this.state.weatherData.daily[1]} name={this.state.name} active={this.state.active}/>
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