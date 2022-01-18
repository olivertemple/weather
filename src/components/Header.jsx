import React, { Component } from "react";
import menu from "../assets/menu.svg"
import close from "../assets/close.png"
export default class Header extends Component{
    render(){
        console.log(this.props)
        return(
            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                <div className="row" style={{zIndex:20}}>
                    <img id="menu expand" src={this.props.menu ? close : menu} style={{filter:(this.props.invert && !this.props.menu) ? "invert(1)" : null, height:this.props.menu ? 20 : 30, width:this.props.menu ? 20 : 30, cursor:"pointer", padding:this.props.menu ? 5 : 0, marginLeft:this.props.menu ? "calc(10px - 2vw)" : 0}} onClick={this.props.toggleMenu}/>
                    <p style={{color:"black", fontSize:20, marginLeft:10}}>{this.props.menu ? "Menu" : ""}</p>
                </div>
                <div style={{display:"flex", justifyContent:"center", width:"calc(100% - 60px)"}}>
                    <h1 style={{textAlign:"center", width:"100%", margin:0, fontSize:15, marginLeft:this.props.menu ? "calc(10px - 6.5ch)" : 0, padding:this.props.menu ? 5 : 0}}>Weather Forecast</h1>
                </div>
            </div>
        )
    }
}