import React from 'react'
import { Link } from 'react-router-dom'

const ExploreNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary px-4" style={{position: 'sticky', top: '0'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="text-primary">Idea</span>Forge
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ms-5 mb-2 mb-md-0">
              <Link to='/' style={{textDecoration: 'none'}}>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Explore
                </a>
              </li>
              
             
            </ul>
            <form className="d-flex gap-3 ms-auto" role="search">
              <input 
                className="form-control me-2 rounded-pill d-none d-md-block"
                type="search"
                placeholder="Search Ideas..."
                aria-label="Search"
              />
              <div>

              </div>
                <img src="/idea.jpg" alt="" width={'20px'} height={'20px'} className='rounded-circle'  />

            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default ExploreNav