import React, { Component } from "react";
import Tomorrow from "./Tomorrow";
import Week from "./Week";
export default class LongTerm extends Component{
    render(){
        console.log(this.props)
        return(
            <div style={{backgroundColor:"#F3FBFF", height:"calc(100% - 40px)", color:"black", padding:20, fontSize:20, borderLeft: "10px solid black"}}>
                <p style={{textAlign:"center", marginTop:"4%"}}>Next <span style={{fontWeight:"bold"}}>7 days</span></p>
                <div>
                    <Tomorrow data={this.props.data[1]}></Tomorrow>
                    <Week data={this.props.data.slice(2)}></Week>
                </div>
            </div>
        )
    }
}