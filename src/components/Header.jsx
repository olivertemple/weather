import React, { Component } from "react";
import menu from "../assets/menu.svg"

export default class Header extends Component{
    render(){
        return(
            <div style={{display:"flex", flexDirection:"row", gap:20}}>
                <img src={menu} style={{filter:"invert(1)"}}/>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <h1 style={{textAlign:"center", width:"100%", margin:0}}>Weather Forecast</h1>
                </div>
            </div>
        )
    }
}