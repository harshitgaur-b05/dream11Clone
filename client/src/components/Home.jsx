import Button from "./Butoon/Button.jsx"
import AddPlayer from "./Addplayer.jsx"
import { Link } from "react-router-dom"
import cpimage from "../assets/Cricket_pitch.jpg"

export default function  Home(){
    return (
        <>
 <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",  // 
                backgroundImage: `url(${cpimage})`, //
                backgroundSize: "cover", //
                backgroundPosition: "center", // 
                flexDirection:""
            }}>
        <Link to="/AddPlayer">
        <Button    name={"ADD PLAYER"} />
        </Link>
        <Link to="/Play">
        <Button name={"Play game"} />
        </Link>
        </div>
        </>
    )
} 