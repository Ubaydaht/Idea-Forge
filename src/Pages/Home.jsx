import React from 'react'



const Home = () => {
   
  return (
    <>
      
        <div className="hero ps-5 py-4" style={{backgroundColor:'#B9D1D3 '}}>
            <div className='py-3 ' style={{fontSize: '25px'}}>
                <span className='d-block'>Share Ideas</span>
                <span className='d-block'>Collaborate</span>
                <span className='d-block text-primary'>Build Together</span>
                <span className='d-block' style={{fontSize: '20px', width:'80%'}}>Post your ideas, get feedbacks,<br /> find and get ideas into reality</span>
                <div className='d-flex gap-4 pt-3'>
                    <button className="btn btn-outline-primary rounded-3" type="submit">
                Get Started
              </button>
              <button className="btn btn-primary rounded-3 " type="submit">
                Explore Ideas
              </button>
                </div>
            </div>
           
        </div>
 
      <IdeaHero/>   

      <section style={{ padding:'2% 5%', backgroundColor:' rgba(11, 93, 215, 0.64)', color: 'white'}}>
        <h1 className='text-center'>How it works</h1>
        <p className='text-center'>Share your ideas, find teammates and work together to bring them to life</p>
        <div className='arrow d-flex justify-content-center'>
          <hr style={{width: '30px', color:'blue'}} />
          <div className='d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
            <img src="/idea.jpg" alt="" width={'40px'} height={'40px'} className='rounded-circle'/>
            <span>Post your Idea</span>
          </div>

          <hr  />
          <div className='d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
            <img src="/idea.jpg" alt="" width={'40px'} height={'40px'} className='rounded-circle mx-2'/>
          <span>Engage & Explore</span>
          </div>

          <hr st/>
          <div className='d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
            <img src="/idea.jpg" alt="" width={'40px'} height={'40px'} className='rounded-circle mx-2'/>
          <span>Join Team</span>
          </div>

          <hr />
          <div className='d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
            <img src="/idea.jpg" alt="" width={'40px'} height={'40px'} className='rounded-circle mx-2'/>
          <span>Collaborate</span>
          </div>

          <hr  />
          <div className='d-flex justify-content-center align-items-center' style={{flexDirection: 'column'}}>
            <img src="/idea.jpg" alt="" width={'40px'} height={'40px'} className='rounded-circle mx-2'/>
          <span>Get Updates</span>
          </div>

          <hr style={{width: '30px', color:'blue'}}/>
        </div>

     
        

        <div className='idea-cards d-md-flex gap-3'>
          <div className='idea-card'>
            <div className='d-flex gap-1 px-2 pt-2'>
              <img src="/idea.jpg" alt="" width={'20px'} height={'20px'} className='rounded-circle'/>
              <span style={{fontSize: '12px', fontWeight: 'bold'}}>Post Your Idea</span>
            </div>
            <p style={{fontSize:'12px'}} className='px-2 pt-2'>Share your project idea and let other discover it.</p>
            <button className='btn btn-primary btn-sm ms-2'>Post Idea</button>
            {/* <img src="/idea.jpg" alt="" width={'100%'} style={{borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}/> */}
          </div>

          <div className='idea-card'>
            <div  className='d-flex gap-1 px-2 pt-2'>
              <img src="/idea.jpg" alt="" width={'20px'} height={'20px'} className='rounded-circle'/>
              <span style={{fontSize: '12px', fontWeight: 'bold'}} >Engage & Explore</span>
            </div>
            <p style={{fontSize:'12px'}} className='p-2'>Browse, upvote and comment on ideas you like</p>
            {/* <img src="/idea.jpg" alt="" width={'100%'} style={{borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}/> */}
          </div> 

          <div className='idea-card'>
            <div className='d-flex gap-1 px-2 pt-2'>
              <img src="/idea.jpg" alt="" width={'20px'} height={'20px'} className='rounded-circle'/>
              <span style={{fontSize: '12px', fontWeight: 'bold'}} >Join a Team</span>
            </div>
            <p style={{fontSize:'12px'}} className='p-2'>Team work with other users to work on exciting ideas</p>
            
            {/* <img src="/idea.jpg" alt="" width={'100%'} style={{borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}/> */}
            
          </div> 

          <div className='idea-card'>
            <div className='d-flex gap-1 px-2 pt-2'>
              <img src="/idea.jpg" alt="" width={'20px'} height={'20px'} className='rounded-circle'/>
              <span style={{fontSize: '12px', fontWeight: 'bold'}} >Collaborate</span>
            </div>
            <p style={{fontSize:'12px'}} className='p-2'>Use boards to organize tasks and track progress preoddd</p>
          {/* <img src="/idea.jpg" alt="" width={'100%'} style={{borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}/> */}
          </div>  

          <div className='idea-card'>
            <div className='d-flex gap-1 px-2 pt-2'>
              <img src="/idea.jpg" alt="" width={'20px'} height={'20px'} className='rounded-circle'/>
              <span style={{fontSize: '12px', fontWeight: 'bold'}}>Get Updates</span>
            </div>
            <p style={{fontSize:'12px'}} className='p-2'>Get notify when your idea receive comments or upvotes</p>
            
            {/* <img src="/idea.jpg" alt="" width={'100%'} style={{borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}/> */}
          </div>    
        </div>
      </section>

      <section className='getStarted d-flex justify-content-center align-items-center'>
        <h4 className='text-light text-center fs-1'>Get started with IdeaForge today</h4>
        <p className='text-light text-center'>Explore ideas, post, collaborate with like minds like you and achieve something great</p>
        <button className='btn  text-primary btn-light '>Sign up- it's free</button>

      </section>
    


    <footer>
      <div className='d-md-flex justify-content-between '>
        <div>
          <a className="navbar-brand fs-1"  href="#">
            <span className="text-primary">Idea</span>Forge
          </a>
          <p>Explore, Post, Collaborate,Join Team <br /> and bring life to your ideas  </p>
          <div>
            <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <img src="" alt="" />
          </div>
          </div>
        </div>
        <div className='d-flex gap-3' style={{flexDirection:'column'}}>
          <h5>LINKS</h5>
          <a>Home</a>
          <a>Explore</a>
          <a>How it works</a>
        </div>
        <div>
          <h5>LEGAL</h5>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
      <hr  />
      <p className='text-center'>&copy; 2026 IdeaForge. All rights reserved. Powered by <span style={{color: '#020618'}}>Ubaydah</span></p>
    </footer>
    </>
  )
}

export default Home