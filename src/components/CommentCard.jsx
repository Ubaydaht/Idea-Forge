import React from 'react'

const CommentCard = () => {
  return (
    <>
    <div style={card}>
            <img src="" alt="" />
            <div className='d-flex justify-content-between align-items-center '>
               <div>
                 <p>{Commenter} . {day} days ago</p>
                 <div>
                    <img src="" alt="" />
                    <span>12</span>
                 </div>
               </div>
                <p>{comment}</p>
            </div>
            
        </div>
    </>
  )
}

export default CommentCard