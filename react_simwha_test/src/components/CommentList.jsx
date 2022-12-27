import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import { __getCommentsThunk } from "../redux/modules/commentsSlice";
function CommentList() {
  const { data } = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getCommentsThunk());
  }, []);
  console.log(data);
  return (
    <>
      {data.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

export default CommentList;
