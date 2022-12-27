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
import styled from "styled-components";

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editComment, setEditComment] = useState("");
  const editHandler = () => {
    setIsEdit((prev) => !prev);
  };
  const deleteHandler = (event) => {
    event.preventDefault();
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
    <CommListWrap>
      {isEdit ? (
        <ListInput
          type="text"
          value={editComment}
          onChange={changeEditCommentHandler}
        />
      ) : (
        <CommentContent>
          <div>{comment.content}</div>
          <ButtonWrap>
            <DeleteButtonWrap disabled={isEdit} onClick={deleteHandler}>
              삭제
            </DeleteButtonWrap>
            {isEdit ? (
              <ListButton onClick={editDoneHandler}>완료</ListButton>
            ) : (
              <ListButton onClick={editHandler}>수정</ListButton>
            )}
          </ButtonWrap>
        </CommentContent>
      )}
    </CommListWrap>
  );
};
export default Comment;

const CommListWrap = styled.div`
  margin: auto;
`;

const CommentContent = styled.div`
  width: 730px;
  border-bottom: 2px solid #ffcd00;

  padding-top: 10px;
  font-size: 17px;
`;

const ListInput = styled.input``;

const ButtonWrap = styled.div`
  background-color: white;
  width: 250px;
  display: flex;
  margin-left: 500px;
  margin-bottom: 10px;
`;

const DeleteButtonWrap = styled.button`
  margin-right: 10px;
  margin-left: 130px;
  display: block;
  background-color: #ffcd00;
  color: #3e2723;
  border-radius: 6px;
  width: 45px;
  font-weight: bold;
  border-color: #ffb300;
  box-shadow: 0px 1px 1px 0px black;
  font-size: 12px;
`;
const ListButton = styled.button`
  display: block;
  background-color: #ffcd00;
  color: #3e2723;
  border-radius: 6px;
  width: 45px;
  font-weight: bold;
  border-color: #ffb300;
  box-shadow: 0px 1px 1px 0px black;
  font-size: 12px;
`;
