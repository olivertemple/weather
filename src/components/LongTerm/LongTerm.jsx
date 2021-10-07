import React, { Component } from "react";
import Tomorrow from "./Tomorrow";
import Week from "./Week";
export default class LongTerm extends Component{
    render(){
        console.log(this.props)
        return(
            <div style={{backgroundColor:"#F3FBFF", height:"calc(100% - 40px)", color:"black", padding:20, fontSize:20, borderLeft: "10px solid black", overflow:"auto"}}>
                <p style={{textAlign:"center", marginTop:"4%"}}>Next <span style={{fontWeight:"bold"}}>7 days</span></p>
                <div>
                    <Week data={this.props.data.slice(1)}></Week>
                </div>
            </div>
        )
    }
}