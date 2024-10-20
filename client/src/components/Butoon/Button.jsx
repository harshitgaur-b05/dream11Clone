export default function Button(props){
function handlebutton(Component){
 return <Component/>
}
    return (
    <div>
        <button style={{
            margin:"60px",
            padding:"20px"

        }} >{props.name}</button>
    </div>
)
}