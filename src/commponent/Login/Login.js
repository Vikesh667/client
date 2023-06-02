import React, { useState } from 'react'
import style from "./Login.module.css"
import {Link,useNavigate} from "react-router-dom"

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const submitForm=async(e)=>{
         e.preventDefault()
         try{
            const res= await fetch("http://localhost:8000/api/login",{
                method:"post",
                body:JSON.stringify({email,password}),
                headers:{
                    "Content-Type":"application/json"
                }
            })  
            const data=await res.json()
            if(data){
              alert(data.message)
              localStorage.setItem("User",JSON.stringify(data))
              navigate('/')
            }else{
              alert(data.message)
            }
           
            
          
         }catch(error){
          console.log(error.message)
         }
   
    }  
  return (
    <div className={style.container}>
        <form onSubmit={submitForm} >
        
          <h2>Sign In</h2>
            <input type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter your email ' autoComplete='off'/>
            <input type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter your password ' autoComplete='off'/>
            <button type='submit'>Sign Up</button>
            <Link to="/register">If you don't have acoount ? Register</Link>
             <Link to='/resetPassword'><p>Forget Password</p> </Link>  
        </form>
    </div>
  )
}

export default Login