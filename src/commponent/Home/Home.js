import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Home/Home.module.css"
const Home = () => {
  return (
    <div className={style.home}> 
    <button><Link to='/register'>join us</Link></button>   
    </div>
  )
}

export default Home