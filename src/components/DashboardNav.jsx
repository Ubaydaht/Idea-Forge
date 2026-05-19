import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DashboardNav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <nav class="navbar navbar-expand-md " style={{backgroundColor:'#F0F1F5', position:'sticky', top:'0', zIndex:'1000'}}>
        <div class="container-fluid">
          <Link to='/dashhboard' className="navbar-brand" href="#">
            <span className="text-primary">Idea</span>Forge
          </Link>

          <Link to='/newidea' className="d-md-none">
            <button className="btn text-light d-md-none" style={{backgroundColor:'#003D9B'}}
         ><img src="/plus.svg" alt="" /> Create new Idea
             </button>
          </Link>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto d-flex align-items-center gap-3">
             
              <Link to='/newidea' class="nav-link" href="#">
                <button className="btn text-light" style={{backgroundColor:'#003D9B'}}>
                  <img src="/plus.svg" alt="" /> Create new Idea
                </button>
              </Link>
              <Link to='/notifications' class="nav-link" href="#">
                <img src="/notification.svg" alt=""  width={'30px'}/>
              </Link>
             <Link to="/profile" className="nav-link">
  {user?.image ? (
    <img
      src={user.image}
      alt="profile"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        objectFit: "cover"
      }}
    />
  ) : (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#ccc"
      }}
    />
  )}
</Link>
            </div>
            

            
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
