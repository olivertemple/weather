import React, { Component } from "react";
import NavBar from "./Future/NavBar";
import Today from "./Future/Today";
export default class Future extends Component{
    constructor(props){
        super(props)
        this.state = {
            timeFrame:"today",
            active:null
        }

        this.setTimeFrame = this.setTimeFrame.bind(this)
        this.setActive = this.setActive.bind(this);
    }
    setTimeFrame(timeFrame){
        this.setState({
            timeFrame:timeFrame
        })
    }

    setActive(key){
        this.setState({
            active:key
        })
    }


    render(){
        console.log(this.props);

        return(
            <div>
                <NavBar timeFrame={this.state.timeFrame} setTimeFrame={this.setTimeFrame}></NavBar>
                <div style={{padding:10}}>
                    {this.state.timeFrame === "today" ? 
                            <Today data={this.props.hourly} active={this.state.active} setActive={this.setActive}></Today>
                    : null}
                </div>
            </div>
            
        )
    }
}