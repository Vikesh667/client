import React, { useState } from 'react'
import style from "./Register.module.css"
import {Link,useNavigate} from "react-router-dom"
import axios from "axios"
const Register = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [mobile,setMobile]=useState("")
  const [password,setPassword]=useState("")
  const [image,setImage]=useState(null)
  const [message,setMassage]=useState("")
  const navigate=useNavigate()
  const submitForm=async(e)=>{
   e.preventDefault()
   const formData=new FormData()
   formData.append("image",image)
   formData.append("name",name)
   formData.append("email",email)
   formData.append("mobile",mobile)
   formData.append("password",password)
   try{
   const res= await axios.post("http://localhost:8000/api/register",formData)
   setMassage(res.data.message)
   setTimeout(()=>{
     navigate('/login')
   },3000)
   }catch(error){
    console.log(error.message)
   }
     
  }
  return (
    <div className={style.container}>
        <form onSubmit={submitForm}>
        
          <h2>Sign Up</h2>
            <input type='text' 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter your name' autoComplete='off'/>
            <input type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter your email ' autoComplete='off'/>
            <input type='mobile'
            value={mobile}
            onChange={(e)=>setMobile(e.target.value)}
            placeholder='Enter your mobile ' autoComplete='off'/>
            <input type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter your password ' autoComplete='off'/>
            <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
            <button type='submit'>Sign Up</button>
            <Link to="/login">Alreday have acoount ? Login</Link>
            <p className={style.para}>{message}</p>
        </form>
    </div>
  )
}

export default Register