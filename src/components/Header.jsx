import React, { Component } from "react";
import menu from "../assets/menu.svg"

export default class Header extends Component{
    render(){
        return(
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <img src={menu} style={{filter:this.props.invert ? "invert(1)" : null, height:30, width:30, zIndex:20, cursor:"pointer"}} onClick={this.props.toggleMenu}/>
                <div style={{display:"flex", justifyContent:"center", width:"calc(100% - 60px)"}}>
                    <h1 style={{textAlign:"center", width:"100%", margin:0, fontSize:15}}>Weather Forecast</h1>
                </div>
            </div>
        )
    }
}