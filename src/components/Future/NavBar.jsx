export default function NavBar(props){
    return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
            <div onClick={() => {props.setTimeFrame("today")}} style={{textAlign:"center"}}>
                <p style={{fontWeight:props.timeFrame === "today" ? "bold" : "normal", fontSize:15}}>Today</p>
                <p style={{fontSize:50, marginTop:-25, marginBottom:-25, color:props.timeFrame === "today" ? null : "#00000000"}}>·</p>
            </div>
            <div onClick={() => {props.setTimeFrame("tomorrow")}} style={{textAlign:"center"}}>
                <p style={{fontWeight:props.timeFrame === "tomorrow" ? "bold" : "normal", fontSize:15}}>Tomorrow</p>
                <p style={{fontSize:50, marginTop:-25, marginBottom:-25, color:props.timeFrame === "tomorrow" ? null : "#00000000"}}>·</p>
            </div>
            {props.width < 1000 ? (
                <div onClick={props.showLongTerm}>
                    <p style={{color:"#4880C5"}}>Next 7 Days {">"}</p>
                </div>)
             : null}
            
        </div>
    )
}