import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { __getPostThunk } from "../redux/modules/mainupdateSlice";
import ReactHtmlParser from "react-html-parser";
import ReactStars from "react-rating-stars-component";
import { ScrollToTop } from "../components/ScrollToTop";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import inga from "../img/inga_bbang.jpg";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.mainupdateSlice.posts);
  console.log(posts);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPostThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Weather />

      <MainBox>
        {/* 버튼 클릭 시 스크롤을 맨 위로 올려주는 컴포넌트 */}
        <ScrollToTop />
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="검색하고 싶은 제목, 내용, 닉네임을 입력하세요"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            style={{ color: "white", backgroundColor: "#facb55" }}
          >
            검색
          </Button>
        </InputGroup>

        <SortBox>
          <DropdownButton id="dropdown-item-button" title="---정렬---">
            <Dropdown.Item as="button">전체</Dropdown.Item>
            <Dropdown.Item as="button">평점순</Dropdown.Item>
          </DropdownButton>
        </SortBox>
        {/* 글목록 */}
        <ItemContainer>
          <Items>
            {/* 글 */}
            {posts?.map((posts) => (
              <Item
                key={posts.id}
                onClick={() => {
                  navigate(`/${posts.id}`);
                }}
              >
                <RatingBox>
                  <ReactStars
                    count={posts.rate}
                    size={30}
                    color="#f2d589"
                    activeColor="#f2d589"
                  ></ReactStars>
                </RatingBox>
                <TitleBox>{posts.title}</TitleBox>
                <ContentBox>{ReactHtmlParser(posts.content)}</ContentBox>
                <UserNameBox>{posts.user_id}</UserNameBox>
              </Item>
            ))}
          </Items>
        </ItemContainer>
      </MainBox>
    </Layout>
  );
};

export default Home;

const MainBox = styled.main`
  background-image: url(${inga});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
const SortBox = styled.section`
  display: flex;
  text-align: right;
  justify-content: flex-end;
  border-top: 3px solid #f2d589;
  padding-top: 10px;
  box-sizing: inherit;
  margin-bottom: 15px;
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 0 auto;
  box-sizing: inherit;
`;
const Items = styled.ul`
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  display: flex;
  grid-gap: 35px;
  gap: 35px;
  flex-wrap: wrap;
  padding: 0;
  box-sizing: inherit;
`;
const Item = styled.div`
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 26px 26px 34px;
  width: 300px;
  height: 370px;
  background-color: #fff;
  border: 2px solid #f2d589;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  transition: 0.2s;
  box-sizing: inherit;

  &:hover {
    text-decoration: none;
    color: #f2d589;
    width: 310px;
    height: 380px;
  }
`;

const TitleBox = styled.h2`
  font-size: 20px;
  height: 76px;
  line-height: 28px;
  font-weight: 500;
  letter-spacing: -0.04em;
  margin: 16px 0;
  word-break: break-all;
  overflow: hidden;
  box-sizing: inherit;
`;
const ContentBox = styled.p`
  font-size: 16px;
  height: 160px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: -0.04em;
  margin: 11px 0;
  word-break: break-all;
  overflow: hidden;
  box-sizing: inherit;
`;

const UserNameBox = styled.div`
  font-size: 18px;
  border-top: 2px solid #f0e0b5;
  padding-top: 16px;
  color: #f2d589;
  font-weight: 700;
  box-sizing: inherit;
`;

const RatingBox = styled.div`
  font-size: 20px;
  box-sizing: inherit;
`;
