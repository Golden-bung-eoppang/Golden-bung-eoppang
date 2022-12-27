import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { __getPostViewThunk } from "../redux/modules/postViewSlice";
import backImg from "../img/back.png";
import goldenKing from "../img/goldenKing.png";
import Layout from "../components/Layout";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import ReactHtmlParser from "react-html-parser";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

export default function Post() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const detailPost = useSelector((state) => state.posts.detailPost);

  useEffect(() => {}, [location]);

  useEffect(() => {
    dispatch(__getPostViewThunk(location.pathname));
  }, [dispatch]);

  return (
    <Layout>
      <ImgButton
        onClick={() => {
          navigate(-1);
        }}
        type="button"
      >
        <ImgBox src={backImg} />
      </ImgButton>

      <PageContainer>
        {detailPost && (
          <>
            <Title>{ReactHtmlParser(detailPost.title)}</Title>
            <br />
            <UserInfo>
              <div style={{ display: "flex", alignItems: "center" }}>
                <GoldenImg src={goldenKing} />
                <UserName>{detailPost.user_id}&nbsp;&nbsp;</UserName>
                &nbsp;&nbsp;
              </div>
              <ReactStars
                count={detailPost.rate}
                size={30}
                color="#F2D589"
                activeColor="#F2D589"
              ></ReactStars>
            </UserInfo>
            <Intro>
              나의 리뷰소개
              <Button>
                <button
                  style={{
                    display: "block",
                    backgroundColor: "#ffcd00",
                    color: "#3E2723",
                    borderRadius: "8px",
                    width: "52px",
                    fontWeight: "bold",
                    borderColor: "#FFB300",
                    boxShadow: "0px 1px 1px 0px black",
                  }}
                >
                  수정
                </button>
                <button
                  style={{
                    display: "block",
                    backgroundColor: "#ffcd00",
                    color: "#3E2723",
                    borderRadius: "8px",
                    width: "52px",
                    fontWeight: "bold",
                    borderColor: "#FFB300",
                    boxShadow: "0px 1px 1px 0px black",
                  }}
                >
                  삭제
                </button>
              </Button>
            </Intro>

            <Contents>{ReactHtmlParser(detailPost.content)}</Contents>
          </>
        )}
      </PageContainer>
      <CommentInput />
      <CommentList />
    </Layout>
  );
}

const ImgButton = styled.div``;
const ImgBox = styled.img`
  display: flex;
  width: 80px;
  height: 85px;
  margin-left: 200px;
`;
const PageContainer = styled.div``;
const Title = styled.div`
  font-size: 45px;
  font-family: Impact, Haettenschweiler, “Arial Narrow Bold”, sans-serif;
  width: 800px;
  margin: auto;
  font-weight: bold;
  color: #ffcd00;
  flex-wrap: wrap;
  text-shadow: -1px 0px gray, 0px 1px gray, 2px 0px gray, 0px -1px gray;
  padding-bottom: 10px;
  border-bottom: 3px solid #ffcd00;
`;
const GoldenImg = styled.img`
  width: 60px;
  height: 40px;
  margin-right: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  width: 800px;
  margin: 0 auto;
  font-size: 25px;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
`;
const UserName = styled.div``;

const Intro = styled.div`
  display: flex;
  width: 800px;
  height: 50px;
  margin: auto;
  font-weight: bold;
  margin-top: 14px;
  font-size: 28px;
  border-top: 3px solid #ffcd00;
  color: #ffcd00;
  text-shadow: -1px 0px gray, 0px 1px gray, 2px 0px gray, 0px -1px gray;
  padding-top: 10px;
`;

const Button = styled.div`
  display: flex;
  width: 130px;
  height: 30px;
  margin: auto;
  margin-right: -2px;
  justify-content: space-evenly;
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
