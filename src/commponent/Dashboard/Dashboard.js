import React, { useEffect, useState } from "react";
import style from "./Dashboard.module.css";
const Dashboard = () => {
  const [user, setUser] = useState([]);
  const getFormData = async () => {
    const res = await fetch("http://localhost:8000/api/getFrom");
    const data = await res.json();
    console.log(data.userinfo);
    setUser(data.userinfo);
  };
  useEffect(() => {
    getFormData();
  }, []);

  return (
    <div className={style.dashboard}>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Parent Contact</th>
            <th>Adhar No</th>
            <th>Address</th>
            <th>Avater</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.gender}</td>
                <td>{item.dob}</td>
                <td>{item.fatherName}</td>
                <td>{item.motherName}</td>
                <td>{item.parentContact}</td>
                <td>{item.adharNo}</td>
                <td>{item.address}</td>
                <td><img src={`http://localhost:8000/api/userImages/${item.image}`}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
