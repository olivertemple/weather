import close from "../../assets/close.png"
export default function Location(props){
    return(
        <div className="row" style={{justifyContent:"space-between", paddingRight:10, paddingLeft:10, width:"calc(100% - 20px)"}} >
            <p onClick={() => {props.setActive(props.location)}} style={{fontSize:20}}>{props.location.city}</p>
            <img src={close} style={{height:10, width:10}} onClick={props.remove}/>
        </div>
    )
}