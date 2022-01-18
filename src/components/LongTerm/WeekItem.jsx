import rainDrop from "../../assets/raindrop.png";
import Icon from "../Icon";
export default function WeekItem(props){
    let days= ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    let date = new Date(props.data.dt*1000)

    if (!props.selected){

        return(
            <div className="row LongTerm" style={{marginLeft:"1%", marginRight:"1%", paddingLeft:25, paddingRight:25, justifyContent:"space-between", marginTop: props.id==0 ? 25 : 0}} onClick={props.setActive}>
                <div style={{width:"5ch"}}>
                    <p style={{fontSize:15}}>{days[date.getDay()]}</p>
                    <div className="row" style={{padding:5}}>
                        <img src={rainDrop} style={{height:10, width:10}}></img>
                        <p style={{fontSize:12, color:"#A6AEB1"}}>{(props.data.pop*100).toFixed(0)}%</p>
                    </div>
                </div>
                <div style={{justifySelf:"center"}}>
                    <Icon icon={props.data.weather[0].icon} fontSize={40} marginTop={-15} data={props.data}></Icon>
                </div>
                <div className="row" style={{gap:10, justifySelf:"right"}}>
                    <p>{props.data.temp.max.toFixed(0)}&#176;C</p>
                    <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.temp.min.toFixed(0)}&#176;C</p>
                </div>
            </div>
        )
    }else{
        let date = new Date(props.data.dt*1000)
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let sunrise = new Date(props.data.sunrise*1000)
        let sunriseHours = sunrise.getHours()
        let sunriseMins = sunrise.getMinutes() 

        let sunset = new Date(props.data.sunset*1000)
        let sunsetHours = sunset.getHours()
        let sunsetMins = sunset.getMinutes()

        let width = window.innerWidth>1000 ? "calc(50% - 30px)" : "100%"
        console.log(props)
        return(
            <div className="LongTerm" style={{margin:"1%", padding:25,borderRadius:20, backgroundColor:"white", boxShadow:"0px 0px 10px 0px #c5cdd4"}} onClick={props.setActive}>
                <div className="row" style={{justifyContent:"space-between"}}>
                    <div className="row" style={{gap:10}}>
                        <div className="col">
                            <p>{days[date.getDay()]}</p>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.weather[0].description}</p>
                        </div>
                        <Icon icon={props.data.weather[0].icon} fontSize={40} marginTop={-15} data={props.data}></Icon>
                    </div>
                    <div className="row" style={{gap:5}}>
                        <p>{props.data.temp.max.toFixed(0)}&#176;C</p>
                        <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.temp.min.toFixed(0)}&#176;C</p>
                    </div>
                </div>
                <div>
                    <div className="row" style={{justifyContent:"space-between", flexWrap:"wrap"}}>
                        <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:width}}>
                            <p>Precipitation</p>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{(props.data.pop*100).toFixed(0)}%</p>
                        </div>
                        <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:width}}>
                            <p>Wind</p>
                            <div className="row" style={{gap:10}}>
                                <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.wind_speed.toFixed(0)}-{props.data.wind_gust.toFixed(0)} m/s</p>
                                <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.wind_deg.toFixed(0)}&#176;</p>
                            </div>  
                        </div>
                    </div>
                    <div className="row" style={{justifyContent:"space-between", flexWrap:"wrap"}}>

                        <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:width}}>
                            <p>Humidity</p>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.humidity}%</p>
                        </div>
                        <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:width}}>
                            <p>UV<span style={{fontSize:12, color:"#A6AEB1"}}> max</span></p>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.uvi}</p>
                        </div>
                    </div>
                    <div className="row" style={{justifyContent:"space-between", flexWrap:"wrap"}}>

                        <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:width}}>
                            <p>Cloud Cover</p>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.clouds}%</p>
                        </div>
                        <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:width}}>
                            <p>Pressure</p>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.pressure}</p>
                        </div>
                    </div>
                    <div className="row" style={{justifyContent:"space-between", flexWrap:"wrap"}}>

                        <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:width}}>
                            <p>Sunrise</p>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{sunriseHours}:{sunriseMins}</p>
                        </div>
                        <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:width}}>
                            <p>Sunset</p>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{sunsetHours}:{sunsetMins}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}