import React, { useState } from 'react'
import style from '../Login/Login.module.css'
import { Link,useNavigate } from 'react-router-dom'
const AdminLogin = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    const submitForm=async(e)=>{
        e.preventDefault()
        try{
           const res= await fetch("http://localhost:8000/api/admin",{
               method:"post",
               body:JSON.stringify({email,password}),
               headers:{
                   "Content-Type":"application/json"
               }
           })  
           const data=await res.json()
            console.log(data.message)
           if(data.userData.is_admin===1){
             alert(data.message)
             localStorage.setItem("User",JSON.stringify(data))
             navigate('/dashboard')
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
    
      <h2>Admin SignIn</h2>
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
    </form>
</div>
  )
}

export default AdminLogin