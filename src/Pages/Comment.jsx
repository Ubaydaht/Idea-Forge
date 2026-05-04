import React from 'react'
import CommentCard from '../components/CommentCard'

const Comment = () => {
  return (
    <>
        <form action="">
            <input type="text" />
            <button>POST</button>
        </form>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
        <CommentCard/>
    </>
  )
}

export default Comment