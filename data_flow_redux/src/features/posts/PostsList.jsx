import React from 'react'
import { useSelector } from "react-redux";
import { PostAuthor } from './PostAuthor';
import { selectAllPosts } from './postsSlice';




const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <p  className='postCredit'>
        <PostAuthor userId={post.userId}/>
      </p>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

export default PostsList