import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import './Style.css'

const Blogs = () => {
  const { posts, loading } = useContext(AppContext);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <h1>No posts found</h1>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="blog-post">
            <p className="text-red-500 blog-title">{post.title}</p>
            <p className="blog-author-category">
              By<span>{post.author}</span> on <span>{post.category}</span>
            </p>
            <p className="blog-date">Posted on {post.date} </p>
            <p className="blog-content">{post.content}</p>
            <div className="blog-tags">
              {post.tags.map((tag, index) => (
                <span key={index}>#{tag} </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
