export default function Item(props){
    let date = new Date(props.data.dt*1000)
    let now = new Date();
    if (now.getDate() + 2 > date.getDate()){
        let hours = date.getHours()
        if (hours > 12){
            hours = (hours - 12)+"PM"
        }else{
            hours = hours + "AM"
        }
        let c = null
        if (date.getDate() > now.getDate() && date.getHours() == 0){
            c = "tomorrow"
        }else if (date.getDate() == now.getDate() && date.getHours() == now.getHours()){
            c = "today"
        }
        return(
            <div className={c} style={{padding:10, textAlign:"center", backgroundColor:props.id!==props.active ? "#1E1F45" : "white", borderRadius:50, margin:10,marginLeft:5, marginRight:5, borderColor:props.id!==props.active ? "#303058" : "#00000000", borderWidth:2, borderStyle:"solid", color:props.id!==props.active ? "white" : "#10103B", transform:props.id!==props.active ? "translate(0px, 10px)" : "translate(0px, 0px)", boxShadow:props.active !== props.id ? null : "0px 0px 10px 0px #FFFFFF80"}} onClick={() => {props.setActive(props.id, date.getDate())}} id={`item${props.id}`}>
                <p style={{fontSize:12, padding:5}}>{hours}</p>
                <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} style={{backgroundColor:props.id!==props.active ? "#191A43" : "#b0c8e8", borderRadius:"100%", marginTop:5}}></img>
                <div style={{textAlign:"center"}}>
                    <p>{props.data.temp.toFixed(0)}&#176;C</p>
                    <p style={{color:props.id!==props.active ? "#FFFFFF60" : "#00000080", fontSize:12}}>{props.data.feels_like.toFixed(0)}&#176;C</p>
                </div>
                

            </div>
        )
    }else{
        return null
    }
    
}