import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Home/Home.module.css"
const Home = () => {
  let auth=localStorage.getItem("User")
  return (
    <div className={style.home}> 
     {auth ? null:  <button><Link to='/register'>join us</Link></button> }  
     <h1>Hello,Home page working in process...</h1>
    </div>
  )
}

export default Home