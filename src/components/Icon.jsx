export default function Icon(props){
    console.log(props)
    let icon = (props.icon.slice(0,2))
    let iconCode
    switch (icon){
        case "01":
            iconCode = "1";
            break;
        case "02":
            iconCode = "2";
            break;
        case "03":
            if (props.data.wind_speed <= 11){
                iconCode = "A";
            }else{
                iconCode = "D"
            }
            break;
        case "04":
            if (props.data.wind_speed <= 11){
                iconCode = "3";
            }else{
                iconCode = "E"
            }
            break;
        case "09":
            iconCode = "G";
            break;
        case "10":
            if (props.data.clouds > 50){
                iconCode = "K";
            }else{
                if (props.icon[2] === "d"){
                    iconCode = "J";
                }else{
                    iconCode = "k"
                }
            }
            break;
        case "11":
            iconCode = "S";
            break;
        case "13":
            iconCode = "I";
            break;
        case "50":
            iconCode = "…";
            break;

    }
    return(
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <p className="icon" style={{fontSize:props.fontSize, marginTop:props.marginTop}}>
                {iconCode}
            </p>
        </div>
    )
}