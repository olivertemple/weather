import React, { Component } from "react";
import pin from "../assets/pin2.png"
import Icon from "./Icon";
export default class Current extends Component{
    constructor(props){
        super(props)
        this.state = {
            sunText: null
        }
        this.getSunTimes = this.getSunTimes.bind(this)
    }

    getSunTimes(){
        let now = + new Date()
        let sunrise = this.props.data.sunrise
        let sunset = this.props.data.sunset
        let text;
        if (now < sunrise){
            text = `Sunrise  ${new Date(sunrise*1000).getHours()}:${new Date(sunrise*1000).getMinutes()}`
        }else if (now > sunset){
            text = `Sunset  ${new Date(sunset*1000).getHours()}:${new Date(sunrise*1000).getMinutes()}`
        }else{
            sunrise = this.props.tomorrow.sunrise
            text = `Sunrise  ${new Date(sunrise*1000).getHours()}:${new Date(sunrise*1000).getMinutes()}`
        }

        return text
    }

    dayOrNight(){
        let now = + new Date();
        return now > this.props.data.sunrise || now < this.props.data.sunset
    }
    // /<img src={`https://openweathermap.org/img/wn/${this.props.data.weather[0].icon}@2x.png`}></img>

    render(){
        console.log(this.props)
        let date = new Date()
        let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
        let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
        let day=days[date.getDay()]
        let month = months[date.getMonth()]
        return(
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", gap:5}}>
                <div className="col" style={{alignItems:"center"}}>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <Icon icon={this.props.data.weather[0].icon} fontSize={100} marginTop={-30} data={this.props.data}></Icon>
                        <div>
                            <p style={{fontSize:30}}>Today</p>
                            <p style={{color:"#FFFFFF80", fontSize:15}}>{day}, {date.getDate()} {month}</p>
                        </div>
                    </div>
                    <p style={{color:"#FFFFFF80", fontSize:15}}>{this.props.data.weather[0].description}</p>
                </div>
                
                <div style={{display:"flex", flexDirection:"row"}}>
                    <p style={{fontSize:100, margin:0}}>{this.props.data.temp.toFixed(0)}</p>
                    <p style={{fontSize:20}}>&#176;C</p>
                </div>
                <div className="row" style={{color:"#FFFFFF80", gap:5}}>
                    <img src={pin} alt="location pin" style={{height:15, width:this.props.active==="location" ? 15 : 0}}/>
                    <p>{this.props.name}</p>
                </div>
                <div style={{display:"flex", flexDirection:"row", gap:5, alignItems:"center", color:"#FFFFFF80"}}>
                    <p>Feels like {this.props.data.feels_like.toFixed(0)}</p>
                    <p style={{fontSize:50, marginTop:-2.5}}>·</p>
                    <p>{this.getSunTimes()}</p>
                </div>
            </div>
        )
    }
}