//packages
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  async function fetchAsync() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
  }

  useEffect(() => {
    fetchAsync();
  });

  return (
    <div>
      <h1>Our posts</h1>
      {posts.map((post) => (
        <Link key={post.id} to={`/blog/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;
