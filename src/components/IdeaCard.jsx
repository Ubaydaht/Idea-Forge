import React from 'react'
const IdeaCard = ({title, description, subtle, subtlee, posterName, day}) => {
    const card ={
        width: '90%',
        margin: ' 2% 5%',
        padding:'20px',
        borderRadius : '30px',
        boxShadow:'0 0 30px 0 rgba(0, 0, 0, 0.1)'
    }
    const subtleStyle ={
        backgroundColor : 'blue',
        padding: '5px',
        color: 'white',
        borderRadius: '20px',
        fontSize: '12px'
    }

  return (
    <>
        <div style={card}>
            <h5>{title}</h5>
            <div className='d-flex justify-content-between align-items-center '>
                <span>{description}</span>
                <div className='d-flex gap-3'>
                    <span>Up</span>
                    <span>Com</span>
                </div>
            </div>
            <div className='d-flex gap-4'>
                <span style={subtleStyle} >{subtle}</span>
                <span style={subtleStyle}>{subtlee}</span>
            </div>
            <div className='d-flex justify-content-between '>
                <div className='d-flex  gap-1 align-items-center'>
                    <img src="/idea.jpg" alt="" width={'20px'} height={'20px'} className='rounded-circle'  />
                    <span>{posterName}</span>
                    <span>. {day} days ago</span>
                </div>
                <button className="btn btn-primary rounded-3 ">Join Team</button>
            </div>
        </div>
    </>
  )
}

export default IdeaCard