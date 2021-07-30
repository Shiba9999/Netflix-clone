import React from 'react'
import "./ProfileScreen.css"
import {Link, useHistory } from "react-router-dom"
import Nav from '../Component/Nav'
import PlanScreen from './PlanScreen'
import auth from '../firebase';

function ProfileScreen() { 

    const history=useHistory()
    async function signOut(e){
        e.preventDefault();
        localStorage.removeItem("isSignin")
        history.push("/login")
        return await auth.signOut();

    }
    return ( 
        <div className="profileScreen">
            <Link to="/">

               <Nav/>
               
            </Link>
             {/* <Nav/> */}
          

           <div className="profileScreen__body">
               
               <h2>Edit Profile</h2>
               <div className="profileScreen__info">
                   <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                   alt=""
                   />
                   <div className="profilescreen__details">
                       <h2>payment details</h2>
                       <div className="profileScreen__plans">
                           <h3>Plans</h3>

                         <PlanScreen/>
                           <button  className="profileScreen__signOut" onClick={signOut} >Signout</button>
                       </div>
                   </div>

               </div>

           </div>
            
            {/* <Link to="/">
             <img 
            className="nav__logo"
           src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
           </Link> */}

        </div>
    ) 
}

export default ProfileScreen
