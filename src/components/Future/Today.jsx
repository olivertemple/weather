import Item from "./Item"
import HourBar from "./HourBar";
export default function Today(props){
    return(
        <div>
            <div style={{display:"flex", flexDirection:"row", overflow:"scroll"}}>
                {
                    props.data.map((item, key) => {
                        return(
                            <Item id={key} data={item} active={props.active} setActive={props.setActive} />
                        )
                    })
                }
            </div>
            <div style={{height:100}}>
                <p>Chance of rain</p>
                <div style={{display:"flex", flexDirection:"row", height:"125%"}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"calc(100% - 10)", padding:10}}>
                        <p>100%</p>
                        <p>0%</p>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", height:"100%", gap:20, overflow:"scroll", margin:10}}>
                        {
                            props.data.map((item, key) => {
                                return(
                                    <HourBar id={key} data={item} active={props.active} setActive={props.setActive}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}