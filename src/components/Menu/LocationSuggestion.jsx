export default function LocationSuggestion(props){
    console.log(props)
    return(
        <div className="row" style={{justifyContent:"space-between", marginTop:10, borderBottom:"1px solid black"}} onClick={() => {props.addItem({city:props.value.name, state:props.value.data, country:props.value.country}); document.getElementById("locationSearch").value = ""}}>
            <p style={{fontSize:20}}>{props.value.name}</p>
            <div className="row" style={{gap:5}}>
                <p >{props.value.country}</p>
                <p style={{color:"#A6AEB1", fontSize:10}}>{props.value.state}</p>
            </div>
        </div>
    )
}