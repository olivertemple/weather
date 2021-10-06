export default function Tomorrow(props){
    console.log(props)
    let date = new Date(props.data.dt*1000)
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return(
        <div style={{margin:25, padding:25,borderRadius:20, backgroundColor:"white", boxShadow:"0px 0px 10px 0px grey"}}>
            <div className="row" style={{justifyContent:"space-between"}}>
                <div className="row" style={{gap:10}}>
                    <p>{days[date.getDay()]}</p>
                    <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} style={{height:30, width:30, backgroundColor:"#4994E6", borderRadius:100, padding:5}}></img>
                </div>
                <div className="row" style={{gap:5}}>
                    <p>{props.data.temp.max.toFixed(0)}&#176;C</p>
                    <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.temp.min.toFixed(0)}&#176;C</p>
                </div>
            </div>
            <div style={{justifyContent:"space-between"}}>
                <div className="row" style={{justifyContent:"space-between"}}>
                    <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:"calc(50% - 30px)"}}>
                        <p>Precipitation</p>
                        <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.pop.toFixed(0)}%</p>
                    </div>
                    <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:"calc(50% - 30px)"}}>
                        <p>Wind</p>
                        <div className="row" style={{gap:10}}>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.wind_speed.toFixed(0)}-{props.data.wind_gust.toFixed(0)} m/s</p>
                            <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.wind_deg.toFixed(0)}&#176;</p>
                        </div>  
                    </div>
                </div>
                <div className="row" style={{justifyContent:"space-between"}}>

                    <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:"calc(50% - 30px)"}}>
                        <p>Humidity</p>
                        <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.humidity}%</p>
                    </div>
                    <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:"calc(50% - 30px)"}}>
                        <p>UV<span style={{fontSize:12, color:"#A6AEB1"}}> max</span></p>
                        <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.uvi}</p>
                    </div>
                </div>
                <div className="row" style={{justifyContent:"space-between"}}>

                    <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:"calc(50% - 30px)"}}>
                        <p>Cloud Cover</p>
                        <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.clouds}%</p>
                    </div>
                    <div className="row" style={{margin:10, justifyContent:"space-between", gap:10, width:"calc(50% - 30px)"}}>
                        <p>Pressure</p>
                        <p style={{fontSize:14, color:"#A6AEB1"}}>{props.data.pressure}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}