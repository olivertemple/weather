import WeekItem from "./WeekItem";

export default function Week(props){
    return(
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
            {
                props.data.map((item, key) => {
                    return <WeekItem data={item} key={key}></WeekItem>
                })
            }
        </div>
    )
}