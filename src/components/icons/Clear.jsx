import React from "react"
import moon from "../../assets/main/moon.png"
import sun from "../../assets/main/sun.png"
export default function Clear(props){
    if (props.day){
        return(
            <img src={sun}></img>
        )
    }else{
        return <img src={moon}></img>
    }
    
}