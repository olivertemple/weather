import React from "react";
import cloudHalf from "../../assets/main/cloudHalf.png"
import rain from "../../assets/mini/rain.png"

export default function Rain(props){
        return(
            <div style={{display:"flex", marginLeft:25}}>
                <img src={rain} style={{height:20, width:20, position:"absolute", marginTop:25, marginLeft:10}}></img>
                
                <img src={cloudHalf}></img>
            </div>
            
        )
}