import React, { Component } from 'react';
import './PostCards.css';
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/posts'

class PostCards extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts })
  }

  render() {

    const CARDS = this.state.posts.reverse().map((post, index) =>
      index < 8 ? <PostCard title={post.title} content={post.content} imgURL={post.imgURL} author={post.author} id={post._id}key={index} /> : null
    )

    return (
      <div className="post-cards">
        <div className="latest">LATEST</div>
        <div className="cards">
          {CARDS}
        </div>
      </div>
    )
  }
}

export default PostCards