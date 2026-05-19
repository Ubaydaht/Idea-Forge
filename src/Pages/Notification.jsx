import React from 'react'
import DashhoardNav from '../components/DashboardNav'
import './General.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'

const Notification = () => {

  const [notifications, setNotifications] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id;
useEffect(() => {

   axios.get(`https://forgeidea-vp95.onrender.com/notifications/${userId}`)
      .then((res) => {
         setNotifications(res.data);
      })
      .catch((err) => {
         console.log(err);
      });

}, []);
  return (
  <>
  <DashhoardNav />
  <div>
    <h1 className='p-1 ps-4' style={{color:'#003d9b'}}>Notifications</h1>
      
   <hr />
    <div>
      {
 notifications.map((item) => (
   <div key={item._id}  className='pt-2'>
      <div className='p-3 mx-4 d-flex justify-content-between rounded-4' style={{backgroundColor:'#cccccca8'}}>
         {item.sender.firstname} {item.sender.lastname} {item.message}
         <img src="/more.svg" alt="" />
      </div>
   </div>
 ))
}  
    </div>
  </div>
  <BottomNav />
  </>
  )
}

export default Notification