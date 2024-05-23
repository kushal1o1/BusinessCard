import React  from "react";
import logo from "/src/assets/images/logo.jpg"
import "/src/index.css"
export default function Profile(){
    return(
        <div >
           <img className="profile" src={logo} alt="Profile" />
        </div>
    )
}