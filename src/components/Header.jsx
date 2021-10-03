import React, { Component } from "react";
import menu from "../assets/menu.svg"

export default class Header extends Component{
    render(){
        return(
            <div style={{display:"flex", flexDirection:"row", gap:20}}>
                <img src={menu} style={{filter:"invert(1)"}}/>
                <h1 style={{textAlign:"center"}}>Weather Forecast</h1>
            </div>
        )
    }
}