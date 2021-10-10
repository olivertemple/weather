import { Component } from "react";
import WeekItem from "./WeekItem";

export default class Week extends Component{
    constructor(props){
        super(props)

        this.state = {
            active:null
        }

        this.setActive = this.setActive.bind(this)
    }

    setActive(item){
        this.setState({
            active:item!==this.state.active ? item : null
        })
    }

    render(){
        return(
            <div style={{display:"flex", flexDirection:"column", gap:10}}>
                {
                    this.props.data.map((item, key) => {
                        return <WeekItem data={item} id={key} key={key} setActive={() => {this.setActive(key)}} selected={this.state.active === key}></WeekItem>
                    })
                }
            </div>
        )
    }
}