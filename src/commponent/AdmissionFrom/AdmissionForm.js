import React, { useState } from "react";
import style from "./AdmissionFrom.module.css";
import axios from "axios";
const AdmissionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDate] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [parentContact, setParentContact] = useState("");
  const [adharNo, setAdhareNo] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(null);
  const AdmissionForm = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("fatherName", fatherName);
    formData.append("motherName", motherName);
    formData.append("parentContact", parentContact);
    formData.append("adharNo", adharNo);
    formData.append("address", address);

    try {
      const res = await axios.post(
        "http://localhost:8000/api/adminsionform",
        formData
      );
      alert(res.data.message);
      localStorage.setItem("admissionfrom",JSON.stringify(res))
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className={style.container}>
      <form onSubmit={AdmissionForm}>
        <h2>AdmissionForm</h2>
        <input
          type="text"
          placeholder="Enter your full name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <span >
         <label className={style.radiolabel}>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(e)=>setGender(e.target.value)}
        />
        Male
      </label>
       
      <label className={style.radiolabel}>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(e)=>setGender(e.target.value)}
        />
        Female
      </label>
      </span >
        <input
          type="date"
          placeholder="select date"
          name="dob"
          value={dob}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your father name"
          name="fatherName"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your mother name"
          name="motherName"
          value={motherName}
          onChange={(e) => setMotherName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your parent mobile no"
          name="parentContact"
          value={parentContact}
          onChange={(e) => setParentContact(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your adhar number"
          name="adharNo"
          value={adharNo}
          onChange={(e) => setAdhareNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your valid address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
