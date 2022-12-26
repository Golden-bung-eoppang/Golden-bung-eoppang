import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { __getPostViewThunk } from "../redux/modules/postViewSlice";
import backImg from "../img/back.png";
import goldenKing from "../img/goldenKing.png";
import Layout from "../components/Layout";
import styled from "styled-components";
import Comment from "./Comment";

export default function Post() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const detailPost = useSelector((state) => state.posts.detailPost);
  console.log(detailPost);

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  useEffect(() => {
    console.log(123, "123");
    dispatch(__getPostViewThunk(location.pathname));
  }, [dispatch]);

  return (
    <Layout>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        type="button"
      >
        <ImgBox src={backImg} />
      </Button>

      <PageContainer>
        {detailPost && (
          <>
            <Title>{detailPost.title}</Title>
            <br />
            <UserInfo>
              <GoldenImg src={goldenKing} />
              <UserName>{detailPost.user_id}&nbsp;&nbsp;</UserName>&nbsp;&nbsp;
              <WriteRate>⭐&nbsp;{detailPost.rate}점</WriteRate>
            </UserInfo>
            <Intro>나의 리뷰소개</Intro>

            <Contents>{detailPost.content}</Contents>
          </>
        )}
      </PageContainer>
      <Comment />
    </Layout>
  );
}

const Button = styled.div``;
const ImgBox = styled.img`
  display: flex;
  width: 80px;
  height: 85px;
  margin-left: 200px;
`;
const PageContainer = styled.div``;
const Title = styled.div`
  font-size: 45px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  width: 800px;
  height: 50px;
  margin: auto;
  font-weight: bold;
  color: #ffcd00;
  flex-wrap: wrap;
  text-shadow: -1px 0px gray, 0px 1px gray, 2px 0px gray, 0px -1px gray;
`;
const GoldenImg = styled.img`
  width: 60px;
  height: 40px;
  margin-right: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  width: 800px;
  height: 40px;
  margin: auto;
  font-size: 25px;
  margin-top: 20px;
  font-weight: bold;
`;
const UserName = styled.div`
  border-right: 2px solid gray;
`;
const WriteRate = styled.div``;

const Intro = styled.div`
  display: flex;
  width: 800px;
  height: 50px;
  margin: auto;
  font-weight: bold;
  margin-top: 40px;
  font-size: 28px;
  border-bottom: 1px solid gray;
  color: #ffcd00;
  text-shadow: -1px 0px gray, 0px 1px gray, 2px 0px gray, 0px -1px gray;
`;

const Contents = styled.div`
  display: flex;
  width: 800px;
  margin: auto;
  font-weight: bold;
  margin-top: 20px;
  font-size: 17px;
  flex-wrap: wrap;
`;
