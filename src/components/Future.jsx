import React, { Component } from "react";
import NavBar from "./Future/NavBar";
import Today from "./Future/Today";
import smoothscroll from 'smoothscroll-polyfill';
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
        let items = document.getElementsByClassName(timeFrame)
        for (let i=0; i<items.length; i++){
            smoothscroll.polyfill();
            items[i].scrollIntoView({behavior:"smooth"})
            items[i].click()
        }
    }

    setActive(key, date){
        this.setState({
            active:key
        })
        smoothscroll.polyfill();
        document.getElementById(`hour${key}`).scrollIntoView({behavior:"smooth"})
        document.getElementById(`item${key}`).scrollIntoView({behavior:"smooth"})

        let today = new Date().getDate()
        if (today == date){
            this.setState({timeFrame:"today"})
        }else{
            this.setState({timeFrame:"tomorrow"})
        }
    }

    render(){

        return(
            <div style={{marginTop:20}}>
                <NavBar timeFrame={this.state.timeFrame} setTimeFrame={this.setTimeFrame} width={this.props.width} showLongTerm={this.props.showLongTerm}></NavBar>
                <div style={{padding:10}}>
                    <Today data={this.props.hourly} active={this.state.active} setActive={this.setActive}></Today>
                </div>
            </div>
            
        )
    }
}