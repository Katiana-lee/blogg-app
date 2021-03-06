import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
    return (
        <>
            <Link className="post" to={`/posts/${props._id}`}>
                <img className="post-image" src={props.imgURL} alt={props.name} />
                <div className="post-title">{props.title}</div>
                <div className="post-content">{props.content}</div>
                <div className="author">By: {`${props.author}`}</div>
            </Link>
        </>
    )
}

export default Post;