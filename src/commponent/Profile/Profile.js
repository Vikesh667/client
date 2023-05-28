import React, { useEffect, useState } from "react";
import style from "../Home/Home.module.css";
const Profile = () => {
  let user = JSON.parse(localStorage.getItem("User"));

  return (
    <div className={style.home}>
    <div style={{display:"flex",flexDirection:"column"}}>
      <img style={{height:"6rem",width:"6rem",borderRadius:"100%"}}
        src={`http://localhost:8000/api/userImages/${user.userData.image}`}
      />
      <ul style={{ display: "flex", flexDirection: "column" }}>
        <li>{user.userData.name}</li>
        <li>{user.userData.email}</li>
        <li>{user.userData.mobile}</li>
      </ul>
      </div>
    </div>
  );
};

export default Profile;
