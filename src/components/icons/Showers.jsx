import React from "react";
import cloudHalf from "../../assets/main/cloudHalf.png"
import shower from "../../assets/mini/shower.png"

export default function Showers(props){
        return(
            <div style={{display:"flex", marginLeft:25}}>
                <img src={shower} style={{height:20, width:20, position:"absolute", marginTop:25, marginLeft:12.5}}></img>
                <img src={shower} style={{height:20, width:20, position:"absolute", marginTop:25, marginLeft:7.5}}></img>
                <img src={cloudHalf}></img>
            </div>
            
        )
}