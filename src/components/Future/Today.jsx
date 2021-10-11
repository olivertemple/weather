import Item from "./Item"
import HourBar from "./HourBar";
export default function Today(props){
    return(
        <div>
            <div  id="todayScroll" style={{display:"flex", flexDirection:"row", overflow:"auto"}}>
                {
                    props.data.map((item, key) => {
                        return(
                            <Item id={key} data={item} active={props.active} setActive={props.setActive} />
                        )
                    })
                }
            </div>
            <div style={{height:200, marginTop:40}}>
                <p style={{fontSize:15}}>Chance of rain</p>
                <div style={{display:"flex", flexDirection:"row", height:"calc(100% - 40px)"}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"calc(100% - 10)", padding:10, fontSize:15}}>
                        <p>100%</p>
                        <p>0%</p>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", height:"100%", gap:20, overflow:"auto", margin:10}}>
                        {
                            props.data.map((item, key) => {
                                return(
                                    <HourBar key={key} id={key} data={item} active={props.active} setActive={props.setActive}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}