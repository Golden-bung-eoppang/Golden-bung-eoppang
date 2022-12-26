import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { __getPostThunk } from "../redux/modules/addupdateSlice";
import ReactHtmlParser from "react-html-parser";
import ReactStars from "react-rating-stars-component";
import { ScrollToTop } from "../components/ScrollToTop";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.addupdateSlice.posts);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(__getPostThunk());
  }, [dispatch]);

  // 버튼 클릭 시 스크롤을 맨 위로 올려주는 함수
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <MainBox>
        <ScrollToTop />
        {/* 드랍다운만 부트스트랩 사용했습니다. */}
        <SortBox>
          <Button
            style={{ marginRight: "10px", color: "white" }}
            onClick={() => {
              navigate("/write");
            }}
          >
            글쓰기
          </Button>
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
                  <ReactStars count={posts.rate}></ReactStars>
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

const MainBox = styled.main``;
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
  margin: 0 auto;
  box-sizing: inherit;
`;
const Items = styled.ul`
  list-style: none;
  margin: 0;
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
