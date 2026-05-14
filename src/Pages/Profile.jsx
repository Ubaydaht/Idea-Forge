
import DashboardNav from '../components/DashboardNav'
import './General.css'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from "react";

const Profile = () => {

   const fileRef = useRef(null);

  const [image, setImage] = useState(null);

  const userId = "USER_ID_HERE";

  const chooseFile = () => {
    fileRef.current.click();
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];

    setImage(URL.createObjectURL(file));

    const formData = new FormData();

    formData.append("image", file);

    try {
      const res = await axios.put(
        `http://localhost:5000/upload-profile/${userId}`,
        formData
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
        <DashboardNav />
        <p className='text-center fs-2' style={{color:'#003D8B'}}>My Profile</p>
       
        <div className='w-100' style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px', backgroundColor:'#ccc', padding:'20px', borderRadius:'15px'}}>
           <div>
      <input
        type="file"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={handleImage}
      />

      <div
        onClick={chooseFile}
        style={{
          width: "200px",
          height: "200px",
          border: "2px solid gray",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        {image ? (
          <img
            src={image}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <p>Upload Image</p>
        )}
      </div>
    </div>
  
        <span>click here to edit profile Image</span>
        </div>

        <div className='w-100 mt-3' style={{ backgroundColor:'#ccc', padding:'20px', borderRadius:'15px'}}>
          <div className='d-flex justify-content-between'>
            <span>Firstname</span>
            <span></span>
          </div>
          <div>
            <span>Lastname</span>
            <span></span>
          </div>
          <div>
            <span>Email</span>
            <span></span>
          </div>
        </div>
        <span>Logout</span>
        <span>Signin to another account</span>

    </>
  )
}

export default Profile