export default function Item(props){
    let date = new Date(props.data.dt*1000)
    let hours = date.getHours()
    if (hours > 12){
        hours = (hours - 12)+"PM"
    }else{
        hours = hours + "AM"
    }
    return(
        <div style={{padding:10, textAlign:"center", backgroundColor:props.id!==props.active ? "#1E1F45" : "white", borderRadius:20, margin:10, borderColor:"#303058", borderWidth:2, borderStyle:"solid", color:props.id!==props.active ? "white" : "#10103B", transform:props.id!==props.active ? "translate(0px, 10px)" : "translate(0px, 0px)" }} onClick={() => {props.setActive(props.id)}}>
            <p>{hours}</p>
            <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} style={{backgroundColor:"#191A43", borderRadius:"100%", marginTop:5}}></img>
            <div style={{textAlign:"center"}}>
                <p>{props.data.temp.toFixed(0)}&#176;C</p>
                <p style={{color:props.id!==props.active ? "#FFFFFF60" : "#00000080", fontSize:12}}>{props.data.feels_like.toFixed(0)}&#176;C</p>
            </div>
            

        </div>
    )
}