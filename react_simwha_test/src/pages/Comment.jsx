import React from "react";
import styled from "styled-components";

export default function Comment() {
  return (
    <div>
      <Comments>여기는 댓글이 들어갑니다.</Comments>
    </div>
  );
}

const Comments = styled.div`
  width: 800px;
  height: 50px;
  margin: auto;
  margin-top: 50px;
  border-top: 2px solid gray;
`;
