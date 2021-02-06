import React from 'react'
import './PostCard.css'
import { Link } from 'react-router-dom'
import profilePic from './blankProfile.png';

const PostCard = (props) => {
  console.log('this is ')
  console.log(props)
  let timestamp = "2021-02-04T21:39:32.009Z";
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dateString = months[parseInt(timestamp.slice(5, 7)) - 1];
  dateString += " " + parseInt(timestamp.slice(8, 10));
  dateString += ", " + parseInt(timestamp.slice(0, 4))
  
  return (
    <div className="post-card">
      <Link className="card" to={`/posts/${props.id}`}>
<<<<<<< HEAD
=======
        <img className="post-card-image" src={props.imgURL} alt={props.title} />
>>>>>>> a7fe682e72eb6cd862ad2780c1afa7fc94de164b
        <div className="blog-title">{props.title}</div>
        <div className="userInfo">
          <div className="dateString">{dateString}</div>
          <div className="user">
            <img className="user-pic" src={profilePic} />
            <div className="author-name">{props.author}</div>
          </div>
        </div>
        <div className="post-card-image">
          <img className="post-pic" src={props.imgURL} alt={props.title} />
        </div>
        <div className="content">{props.content}</div>
    </Link>
</div>
  )
}

export default PostCard;