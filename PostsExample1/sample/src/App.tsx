import React from "react";
import "./App.css";
import TextField from "./components/TextField";
import PostsApi from "./components/PostsApi";

function App() {
  return (
    <div>
      <TextField />
      <PostsApi />
    </div>
  );
}

export default App;
