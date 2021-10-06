export default function HourBar(props){
    let date = new Date(props.data.dt * 1000)
    let now = new Date()
    if (now.getDate() + 2 > date.getDate()){
        let pop = props.data.pop ? props.data.pop : 0

        let time = new Date(props.data.dt * 1000).getHours()
        if (time > 12){
            time = time - 12 + "PM"
        }else{
            time = time+"AM"
        }
        let c = null
        if (date.getDate() > now.getDate() && date.getHours() == 0){
            c = "tomorrow"
        }else if (date.getDate() == now.getDate() && date.getHours() == now.getHours()){
            c = "today"
        }
        return(
            <div className={c} style={{display:"flex", flexDirection:"column", alignItems:"center"}} onClick={() =>{props.setActive(props.id, date.getDate())}} id={`hour${props.id}`}>
                <p style={{color:props.id != props.active ? "#FFFFFF60" : "white"}}>{(pop*100).toFixed(0)}%</p>
                <div style={{height:`${100 - pop*100}%`, width:0, border:"none", borderLeftWidth:1, borderLeftStyle:"dashed", borderLeftColor:"#2F3062"}}></div>
                <div style={{height:`${pop*100}%`, backgroundColor:props.id!==props.active ? "#2F3062" : "#F7C411", width:15, borderRadius:10}}></div>
                <p style={{color:props.id != props.active ? "#FFFFFF60" : "white"}}>{time}</p>
            </div>
        )
    }else{
        return null
    }
    
}