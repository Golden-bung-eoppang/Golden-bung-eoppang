import React, { useState } from "react";
import axios from "axios";
import {
  __getCommentsThunk,
  __deleteComment,
  __updateComment,
} from "../redux/modules/commentsSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editComment, setEditComment] = useState("");
  useEffect(() => {
    dispatch(__getCommentsThunk());
  }, []);
  const editHandler = () => {
    setIsEdit((prev) => !prev);
  };
  const deleteHandler = () => {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      dispatch(__deleteComment(comment.id));
    } else {
      return;
    }
  };
  const toLogin = () => {
    const result = window.confirm("로그인하시겠습니까?");
    if (result) {
      return;
    } else {
      return;
    }
  };
  const editDoneHandler = () => {
    dispatch(
      __updateComment({
        id: comment.id,
        content: editComment,
      })
    );
    setEditComment("");
    setIsEdit((prev) => !prev);
  };
  const changeEditCommentHandler = (event) => {
    setEditComment(event.target.value);
  };
  return (
    <div>
      {isEdit ? (
        <input
          type="text"
          value={editComment}
          onChange={changeEditCommentHandler}
        />
      ) : (
        <div>{comment.content}</div>
      )}
      <button disabled={isEdit} onClick={deleteHandler}>
        삭제
      </button>
      {isEdit ? (
        <button onClick={editDoneHandler}>완료</button>
      ) : (
        <button onClick={editHandler}>수정</button>
      )}
    </div>
  );
};
export default Comment;
