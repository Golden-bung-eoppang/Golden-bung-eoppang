import React from "react";
import Layout from "../components/Layout";
import CommentInput from "../components/CommentInput";
import CommentList from "../components/CommentList";
const Post = () => {
  return (
    <Layout>
      <CommentInput />
      <CommentList />
    </Layout>
  );
};

export default Post;
