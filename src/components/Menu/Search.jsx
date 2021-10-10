import React, { Component } from "react";
import LocationSuggestion from "./LocationSuggestion";
import cross from "../../assets/close.png"
export default class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            value:""
        }

        this.addItem = this.addItem.bind(this);
    }

    async searchLocations(location){
        location = location.target.value
        this.setState({value:location})
        if (location === ""){
            this.setState({suggestions: []})
        }else{
            let res = await fetch(` http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
            let text = await res.text()
            let data = JSON.parse(text)
            if (!data.cod){
                console.log(data)
                this.setState({suggestions:data})
            }
        }
    }

    addItem(item){
        this.props.addItem(item);
        this.setState({suggestions:[]})
    }

    render(){
        return(
            <div>
                <div className="row" style={{border:"1px solid black", borderRadius:10, padding:10, backgroundColor:"white"}}>   
                    <input type="text" onChange={(text) => {this.searchLocations(text)}} style={{width:"calc(100% - 20px)", fontSize:20, border:"none", outline:"none"}} placeholder="search" id="locationSearch"></input>
                    <img src={cross} style={{height:20, width:20, display:this.state.value.length > 0 ? "block" : "none"}} />

                </div>
                <div style={{marginTop:10, padding:10, marginLeft:10}}>
                    {this.state.suggestions.map((value, key) => {
                        return(
                        <LocationSuggestion addItem={this.addItem} value={value} key={key}></LocationSuggestion>)
                    })}
                </div>
            </div>
        )
    }
}

