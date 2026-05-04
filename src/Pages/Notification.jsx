import React from 'react'
import ExploreNav from '../components/ExploreNav'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Notification = () => {

  const [notifications, setNotifications] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user.id;
useEffect(() => {

   axios.get(`http://localhost:2131/notifications/${userId}`)
      .then((res) => {
         setNotifications(res.data);
      })
      .catch((err) => {
         console.log(err);
      });

}, []);
  return (
  <>
    <ExploreNav/>
    <h1>Notification</h1>
    <div>
      {
 notifications.map((item) => (
   <div key={item._id}>
      <p>
         {item.sender.username} {item.message}
      </p>
   </div>
 ))
}  
    </div>
  </>
  )
}

export default Notification