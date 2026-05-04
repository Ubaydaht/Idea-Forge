import React from 'react'
import DashboardNav from '../components/DashboardNav'
import './Dashboard.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



const Dashhboard = () => {
    let navigate = useNavigate()
    const [ideas, setIdeas] = useState([]);
    const user = JSON.parse(localStorage.getItem("user"));
    
    useEffect(() => {
        const fetchIdeas = async () => {
            try {
                let token = localStorage.token
                const res = await axios.get("https://forgeidea-vp95.onrender.com/ideas", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                });
                setIdeas(res.data.ideas);
            } catch (error) {
                if(error.response && error.response.status === 401){
                    localStorage.removeItem('token')
                    navigate("/login")
                }
                console.error("Error fetching ideas:", error);
            }
        };

        fetchIdeas();
    }, [navigate]);


  return (
    <>
            <DashboardNav/>
        <h1 className='p-3' style={{fontSize:'40px', color:'#0f0f1e'}}>Discovery Feed</h1>
        <div className='d-md-flex justify-content-between px-3'>
            <p >Explore architectural thoughts and digital seeds from our global <br /> community. Collaborate on the next breakthrough.</p>
            <input style={{height:'40px', width:'300px'}} className='ps-2 rounded-pill' type="text" placeholder='Search ideas, tags or creators' />
        </div>
        <div className='d-flex justify-content-between p-3'>
            <div className='d-flex gap-3'>
                <button className='rounded-pill border border-none text-white fw-medium' style={{backgroundColor:'#0f0f1e', fontSize:'12px'}}>Trending</button>
            <button className='rounded-pill border border-none text-white fw-medium' style={{backgroundColor:'#013c958c', fontSize:'12px'}}>New</button>
            </div>
            <div>
                <button className='rounded-pill border border-none text-white fw-medium' style={{backgroundColor:'#013c958c', fontSize:'12px'}}>Filter</button>
            </div>
        </div>

        {/* first row */}
        <section className='d-md-flex  w-100 gap-4 p-3 flexx' >
        <div className='w-100 d-flex bg-light' style={{width:'45%', boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)'}}>
            <img src="/featured.jpg" alt="" className='w-50' style={{height:'300px'}} />
        <div className='w-50 card ps-3 pt-3'  >
                <div className='d-flex gap-3'>
                    <img src="/idea.jpg" alt="" width={'20px'} className='rounded-circle'/>
                    <span>Ubaydah</span>
                </div>
                <h5 className='py-2'>Testing Vulnerability in Cybersecurity space</h5>
                <p style={{fontSize:'12px'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse atque a suscipit nesciunt quam voluptatibus quo vel, dicta deleniti, alias quis recusandae rerum necessitatibus in, sapiente ea fuga explicabo?</p>
                <div>
                    <div>
                        <span>IOT</span>
                    <span>Research</span>
                    </div>
                    <button>
                        <img src="" alt="" />
                        <span>10</span>
                    </button>
                </div>
            </div>
        </div>
             
            
            <div className='card ps-3 pt-3 rounded-3  text-light' style={{width:'32%', height:'300px', boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)', backgroundColor:'#0f0f1e'}}>
                <h3>Post an idea</h3>
                <p>Have a seed of an idea? Launch it now and find your collective.</p>
                <button>
                    <img src="" alt="" /> Create New Seed
                </button>
            </div>
        </section>

       

      <Link to='/newidea'>
        <button className='d-flex align-items-center justify-content-center rounded-circle  text-light border border-none' style={{position:'fixed', bottom:'10px', right:'10px', width:'50px', height:'50px', backgroundColor:'#0f0f1e'}}>+</button>
      </Link>


    <section className='flexx d-md-flex p-3 gap-3'>
            {ideas.map((idea) => (
                <Link   key={idea._id}
        to={`/idea/${idea._id}`}
        style={{ textDecoration: "none", color: "inherit" }}>
                 <div  key={idea._id}  className='card ps-3 pt-3 rounded-3' style={{width:'32%', height:'300px', boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.5)'}} >
                <div className='d-flex gap-3'>
                    <img src="/idea.jpg" alt="" width={'20px'} className='rounded-circle'/>
                    <span className='text-dark'>
        {idea.createdBy?.firstname} {idea.createdBy?.lastname}
</span>
                </div>
                <h5 className='py-2'>{idea.title}</h5>
                <p style={{fontSize:'12px'}} >{idea.shortDescription}</p>
                <div>
                    <div>
                        <span>{idea.tag1}</span>
                        <span>{idea.tag2}</span>
                    </div>
                    <button>
                        <img src="" alt="" />
                        <span>10</span>
                    </button>
                </div>
            </div>
                </Link>
            ))}
    </section>
 
 <div>
       

          
        </div>


    </>
  )
}

export default Dashhboard