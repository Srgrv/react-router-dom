//packages
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePage = () => {
  const [post, setPost] = useState(null);
  const { category } = useParams();

  async function fetchAsync() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${category}`
    );

    setPost(response.data);
  }

  useEffect(() => {
    fetchAsync();
  }, [category]);

  return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/blog/${category}/edit`}>Edit this post</Link>
        </div>
      )}
    </div>
  );
};

export default SinglePage;
