import React, { Component } from "react";
import menu from "../assets/menu.svg"
import close from "../assets/close.png"
export default class Header extends Component{
    render(){
        console.log(this.props)
        return(
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <img id="menu expand" src={this.props.menu ? close : menu} style={{filter:(this.props.invert && !this.props.menu) ? "invert(1)" : null, height:this.props.menu ? 20 : 30, width:this.props.menu ? 20 : 30, zIndex:20, cursor:"pointer", padding:this.props.menu ? 5 : 0}} onClick={this.props.toggleMenu}/>
                <div style={{display:"flex", justifyContent:"center", width:"calc(100% - 60px)"}}>
                    <h1 style={{textAlign:"center", width:"100%", margin:0, fontSize:15}}>Weather Forecast</h1>
                </div>
            </div>
        )
    }
}