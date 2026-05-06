import React from 'react'
import ExploreNav from '../components/ExploreNav'
import { useState, useEffect } from 'react'
import axios from 'axios'

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
  <div style={{ height:'100vh'}}>
    <nav className='d-flex justify-content-between px-4 py-2'>
       <h1 style={{color:'#003d9b'}}>Activity Feed</h1>
       <input type="text" placeholder='Search notifications...'
       className='border rounded-pill' />
   </nav>
   <hr />
    <div>
      {
 notifications.map((item) => (
   <div key={item._id}  className='pt-2'>
      <div className='p-3 mx-4 d-flex justify-content-between rounded-4' style={{backgroundColor:'#cccccca8'}}>
         {item.sender.firstName} {item.message}
         <img src="/more.svg" alt="" />
      </div>
   </div>
 ))
}  
    </div>
  </div>
  </>
  )
}

export default Notification