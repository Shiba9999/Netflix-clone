import React, { useEffect, useState, useContext , useRef } from 'react'
import "./SignUpScreen.css"
import  auth  from '../firebase';
import {useHistory} from "react-router-dom"

function SignUpScreen() {
     
    const history=useHistory()
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
            console.log(authUser);
            setEmail("");
            setPassword("")
        }).catch((error)=>{
            console.log(error);
        })
    
    }
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((authUser)=>{

            localStorage.setItem("isSignin",true)
            history.push("/")

            console.log(authUser);

        }).catch((error)=>{
            console.log(error)
        })  
    }
  
    return (
        <div className="signupScreen">
            <form>
                <h1>
                    Sign In
                </h1>
                <input   placeholder="Email" type="email" 
                 onChange={(e)=>{
                     setEmail(e.target.value);
                 }}
                ></input>
                <input   placeholder="password" type="passsword"
                  onChange={(e)=>{
                      setPassword(e.target.value);
                  }}
                
                ></input>
                <button type="submit" onClick={signIn}>Sign in</button>
                <h4>
                    <span className="signupScreen__grey">  New To Netflix? </span>

                    <span className="signUpScreen__link"onClick={register} > SignUp Now.</span>

                </h4>
            </form>

        </div>
    )
}

export default SignUpScreen
