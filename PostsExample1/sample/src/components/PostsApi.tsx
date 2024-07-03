import React, { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsApi: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Post[]>(
          "https://jsonplaceholder.typicode.com/posts?userId=10"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Fetching Failed", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Last 10 Posts By Using Query Parameter</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>Id: {post.id} </p>
            <p>UserId: {post.userId} </p>
            <p>title: {post.title}</p>
            <p>body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsApi;
