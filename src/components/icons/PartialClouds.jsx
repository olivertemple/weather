import React from "react";
import moon from "../../assets/main/moon.png";
import sun from "../../assets/main/sun.png";
import cloud from "../../assets/main/cloud.png";

export default function Clear(props){
    if (props.day){
        return(
            <div style={{display:"flex", marginLeft:35}}>
                <img src={sun} style={{height:30, width:30,marginRight:-45}}></img>
                <img src={cloud}></img>
            </div>
            
        )
    }else{
        return(
            <div style={{display:"flex", marginLeft:35}}>
                <img src={moon} style={{height:30, width:30, marginRight:-45}}></img>
                <img src={cloud}></img>
            </div>
        )
    }
    
}