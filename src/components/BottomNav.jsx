import React from 'react'
import { Link } from 'react-router-dom';

export const BottomNav = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
    <div
  className="d-md-none position-fixed bottom-0 start-0 w-100 bg-white border-top"
  style={{ zIndex: 1000 }}
>
  <div className="d-flex justify-content-around align-items-center py-2">

    <Link
      to="/dashhboard"
      className="text-decoration-none text-dark d-flex flex-column align-items-center"
    >
      <img src="/home.svg" alt="" width="24" />
      <small>Home</small>
    </Link>


    <Link
      to="/notifications"
      className="text-decoration-none text-dark d-flex flex-column align-items-center"
    >
      <img src="/notification.svg" alt="" width="24" />
      <small>Notification</small>
    </Link>

    <Link
      to="/profile"
      className="text-decoration-none text-dark d-flex flex-column align-items-center"
    >
      {user?.image ? (
        <img
          src={user.image}
          alt=""
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            objectFit: "cover"
          }}
        />
      ) : (
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "#ccc"
          }}
        />
      )}
      <small>Profile</small>
    </Link>

  </div>
</div>

    </>
  )
}
