import React, { Component, useState } from "react";
import Location from "./Location";
import Search from "./Search";

export default class Menu extends Component{
    constructor(props){
        super(props);
        let storedLocations = eval(localStorage.locations)

        this.state = {
            storedLocations:storedLocations ? storedLocations : []
        }

        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.setActive = this.setActive.bind(this);

    }
    removeItem(item){
        let storedLocations = this.state.storedLocations
        storedLocations.splice(storedLocations.indexOf(item),1)
        this.setState({storedLocations:storedLocations})
        localStorage.locations = JSON.stringify(storedLocations)
    }

    addItem(item){
        let storedLocations = this.state.storedLocations;
        storedLocations.push(item)
        this.setState({storedLocations:storedLocations})
        localStorage.locations = JSON.stringify(storedLocations)
    }

    setActive(location){
        this.props.setActive(location)
        this.props.toggleMenu();
    }

    render(){
        
        return(
            <div className="menu" style={{height:"100%", width:this.props.show ? "40%" : 0, backgroundColor:"#F3FBFF", position:"absolute", zIndex:10, color:"black"}}>
                <div style={{display:this.props.show ? "block" : "none", padding:10}}>

                    <div style={{marginTop:50}}>
                        <p style={{fontSize:25}}>Locations</p>
                        <div className="col" style={{gap:10, width:"100%", marginTop:15}}>
                            {this.state.storedLocations.map((item, key) => {
                                return(
                                    <Location location={item} key={key} remove={() => {this.removeItem(item)}} setActive={this.setActive} ></Location>
                                )
                            })}
                        </div>
                    </div>
                    <div style={{width:"calc(100% - 20px)", padding:10, marginTop:20}}>
                        <Search addItem={this.addItem}></Search>
                    </div>

                </div>

            </div>
        )
    }
}