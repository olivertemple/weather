export default function HourBar(props){
    console.log(props)
    let pop = props.data.pop ? props.data.pop : 0
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{height:`${100 - pop*100}%`, width:0, border:"none", borderLeftWidth:1, borderLeftStyle:"dashed", borderLeftColor:"#2F3062"}}></div>
            <div style={{height:`${pop*100}%`, backgroundColor:props.id!==props.active ? "#2F3062" : "#F7C411", width:15, borderRadius:10}}></div>
            
        </div>
    )
}