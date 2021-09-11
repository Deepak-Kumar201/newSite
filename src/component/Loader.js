import React,{useState} from 'react';
import './CSS/Loader.css';

export default function Loader(props) {
    const [pos,setPos]=useState(window.scrollY);
    var cntStyle={
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        height: "100vh",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.637)",
        left:"0px",
        top:`${pos}px`
    }

    window.addEventListener('scroll',()=>{
        // console.log(setPos);
        setPos(window.scrollY);
    })
    
    if(props.visible===false)return(<></>); 
    else{
        return (
            <div className="cnt" style={cntStyle}>
                <div className="yellow bx"></div>
                <div className="red bx"></div>
                <div className="blue bx"></div>
                <div className="violet bx"></div>
            </div>
        )
     }
}
