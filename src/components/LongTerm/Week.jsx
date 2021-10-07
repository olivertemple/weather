import { Component } from "react";
import WeekItem from "./WeekItem";

export default class Week extends Component{
    constructor(props){
        super(props)

        this.state = {
            active:0
        }

        this.setActive = this.setActive.bind(this)
    }

    setActive(item){
        this.setState({
            active:item
        })
    }

    render(){
        return(
            <div style={{display:"flex", flexDirection:"column", gap:10}}>
                {
                    this.props.data.map((item, key) => {
                        return <WeekItem data={item} key={key} setActive={() => {this.setActive(key)}} selected={this.state.active === key}></WeekItem>
                    })
                }
            </div>
        )
    }
}