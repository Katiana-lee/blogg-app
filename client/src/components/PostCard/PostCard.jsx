import React from 'react'
import './PostCard.css'
import { Link } from 'react-router-dom'

const PostCard = (props) => {
  console.log('this is ', props)
  return (
    <div className="post-card">
      <Link className="card" to={`/posts/${props.id}`}>
        <img className="post-card-image" src={props.imgURL} alt={props.title} />
        <div>View</div>
    </Link>
</div>
  )
}

export default PostCard;