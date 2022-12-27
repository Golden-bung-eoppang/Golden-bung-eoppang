import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";
import { useParams } from "react-router-dom";
import { __addComment } from "../redux/modules/commentsSlice";

function CommentInput() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cid = uuid();
  const [comments, setComments] = useState("");
  const commentsChangeHandler = (e) => {
    setComments(e.target.value);
  };
  const AddCommentsHandler = (event) => {
    event.preventDefault();
    if (!comments.trim()) {
      return alert("내용을 입력해주세요.");
    }
    dispatch(
      __addComment({
        comment_id: id,
        content: comments,
        id: Date.now(),
        username: "엄준식",
        createdAt: new Date(),
      })
    );
    setComments("");
  };
  return (
    <form onSubmit={AddCommentsHandler}>
      <input type="text" value={comments} onChange={commentsChangeHandler} />
      <button>추가하기</button>
    </form>
  );
}

export default CommentInput;
