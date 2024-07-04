import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { fetchPosts, Post } from "../../service/postsService";
import { HEADING } from "../../utils/constants";

const PostsApi: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPosts(10);
        setPosts(postsData);
      } catch (error) {
        console.error(error);
      }
    };

    getPosts();
  }, []);

  return (
    <Box>
      <h1>{HEADING}</h1>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText primary={`Id: ${post.id}`} />
            <ListItemText primary={`Title: ${post.title}`} />
            <ListItemText primary={`Body: ${post.body}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PostsApi;
