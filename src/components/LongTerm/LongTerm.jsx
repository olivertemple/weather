import React, { Component } from "react";
import Week from "./Week";
import arrow from "../../assets/arrow.png";

export default class LongTerm extends Component{
    render(){
        console.log(this.props)
        return(
            <div style={{backgroundColor:"#F3FBFF", height:"calc(100% - 40px)", color:"#10103B", padding:20, fontSize:20, borderLeft:this.props.border ? "10px solid black" : null, overflow:"auto", borderRadius:!this.props.border ? 10 : 0}}>
                <div className="col">
                    {this.props.longTerm ? (<img src={arrow} style={{transform:"rotate(180deg)", height:20, width:20, cursor:"pointer"}} onClick={this.props.showLongTerm}/>) : null
                    }
                    <p style={{textAlign:"center", marginTop:"4%"}}>Next <span style={{fontWeight:"bold"}}>7 days</span></p>
                </div>
                <div>
                    <Week data={this.props.data.slice(1)}></Week>
                </div>
            </div>
        )
    }
}