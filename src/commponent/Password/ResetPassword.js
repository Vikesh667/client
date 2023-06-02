import React, { useState } from 'react'
import style from "../Login/Login.module.css"
const ResetPassword = () => {
    const [email,setEmail]=useState("")
    const sendLink=async(e)=>{
        e.preventDefault()
         const res =await fetch("http://localhost:8000/api/sendpasswordlink",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email})
         })
    }
  return (
    <div className={style.container}>
    <form onSubmit={sendLink} >
    
      <h2>Enter Your Email </h2>
        <input type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Enter your email ' autoComplete='off'/>
        <button type='submit'>Send</button>
    </form>
</div>
  )
}

export default ResetPassword