import React from 'react'
import "./ProfileScreen.css"
import {Link } from "react-router-dom"

function ProfileScreen() {
    return (
        <div className="profile__Screen">
            
            <Link to="/">
             <img 
            className="nav__logo"
           src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
           </Link>
         
           

        </div>
    )
}

export default ProfileScreen
