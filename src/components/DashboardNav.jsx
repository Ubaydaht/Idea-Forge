import React from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md" style={{backgroundColor:'#F0F1F5', position:'sticky', top:'0', zIndex:'1000'}}>
        <div class="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="text-primary">Idea</span>Forge
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto">
              <Link to='/dashhboard' class="nav-link active" aria-current="page" href="#">
                Explore
              </Link>
              <a class="nav-link" href="#">
                Board
              </a>
              <Link to='/notifications' class="nav-link" href="#">
                Activity
              </Link>
            </div>
            <div>
                <img src="/idea.jpg" alt="" width={'30px'} className="rounded-circle" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashboardNav;
