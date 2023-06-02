import React, { useEffect, useState } from 'react'
import style from "../Login/Login.module.css"
import { useNavigate, useParams } from 'react-router-dom'
const ForgotPassword = () => {
  const  [password,setPassword]=useState("")
  const {id,token}=useParams()
const navigate=useNavigate()
  const userValid=async()=>{
    const res =await fetch(`http://localhost:8000/api/forgotpassword/${id}/${token}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data=await res.json()
    console.log(data)
  if(data){
    console.log("user valid")
  }else{
      navigate('/login')
  }
    
  }
  useEffect(()=>{
    userValid()
  },[])
  const updatePassword=async(e)=>{
    e.preventDefault()
    const res =await fetch(`http://localhost:8000/api/${id}/${token}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({password})
    })
    const data=await res.json()
    console.log(data)
    if(data){
     alert(data.message)
    }else{
        navigate('/login')
    }
  }
  return (
    <div className={style.container}>
    <form onSubmit={updatePassword} >
    
      <h2>Enter Your New Password </h2>
        <input type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter your new password ' autoComplete='off'/>
        <button type='submit'>Send</button>
    </form>
</div>
  )
}

export default ForgotPassword