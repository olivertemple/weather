export default function NavBar(props){
    return(
        <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <div onClick={() => {props.setTimeFrame("today")}}>
                <p style={{fontWeight:props.timeFrame === "today" ? "bold" : "normal"}}>Today</p>
            </div>
            <div onClick={() => {props.setTimeFrame("tomorrow")}}>
                <p style={{fontWeight:props.timeFrame === "tomorrow" ? "bold" : "normal"}}>Tomorrow</p>
            </div>
            {props.width < 1000 ? (
                <div>
                    <p style={{color:"#4880C5"}}>Next 7 Days ></p>
                </div>)
             : null}
            
        </div>
    )
}