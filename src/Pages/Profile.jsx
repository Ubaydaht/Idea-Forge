
import DashboardNav from '../components/DashboardNav'
import './General.css'
import { Link } from 'react-router-dom'
import React, { useRef, useState } from "react";

const Profile = () => {

  
  const user = JSON.parse(localStorage.getItem("user"));


  return (
    <>
        <DashboardNav />
       <section className='px-4 py-1'>
         <p className='text-center fs-2' style={{color:'#003D8B'}}>My Profile</p>
       
        <div className='d-flex justify-content-center'>
           <img src={user.image} alt="avatar" style={{width:'150px', height:'150px', borderRadius:'50%'}} className='rounded-circle' />
        </div>

        <div className='w-100 mt-3' style={{ backgroundColor:'#ccc', padding:'30px', borderRadius:'15px'}}>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-medium'>Firstname</span>
            <span>{user.firstname}</span>
          </div>
          <hr />
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-medium'>Lastname</span>
            <span>{user.lastname}</span>
          </div>
          <hr />
          <div className='d-flex justify-content-between align-items-center'>
            <span className='fw-medium'>Email</span>
            <span>{user.email}</span>
          </div>
        </div>
    <Link to='/'>
        <button className='btn btn-danger mt-3 w-100'>Sign Out</button>
    </Link>
      <Link to='/login'>
        <button className='btn btn-dark mt-3 w-100'>Sign in to another account</button>
      </Link>
       </section>

    </>
  )
}

export default Profile