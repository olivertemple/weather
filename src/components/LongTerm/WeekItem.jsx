import rainDrop from "../../assets/raindrop.png";
export default function WeekItem(props){
    console.log(props)
    let days= ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    let date = new Date(props.data.dt*1000)
    return(
        <div className="row" style={{marginLeft:25, marginRight:25, paddingLeft:25, paddingRight:25, justifyContent:"space-between"}}>
            <div style={{width:"5ch"}}>
                <p>{days[date.getDay()]}</p>
                <div className="row" style={{padding:5}}>
                    <img src={rainDrop} style={{height:10, width:10}}></img>
                    <p style={{fontSize:12, color:"#A6AEB1"}}>{props.data.pop.toFixed(0)}%</p>
                </div>
            </div>
            <div style={{justifySelf:"center"}}>
                <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} style={{height:20, width:20, backgroundColor:"#4994E6", borderRadius:100, padding:5}}></img>
            </div>
            <div className="row" style={{gap:10, justifySelf:"right"}}>
                <p style={{color:"#A6AEB1"}}>{props.data.temp.min.toFixed(0)}&#176;C</p>
                <p>{props.data.temp.max.toFixed(0)}&#176;C</p>
            </div>
        </div>
    )
}