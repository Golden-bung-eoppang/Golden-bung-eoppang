import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Layout from '../components/Layout';
import {Dropdown, DropdownButton} from 'react-bootstrap';

const Home = () => {
  return (
    <Layout>
      <MainBox>
        <SortBox>
          <DropdownButton id='dropdown-item-button' title='---정렬---'>
            <Dropdown.Item as='button'>전체</Dropdown.Item>
            <Dropdown.Item as='button'>조회순</Dropdown.Item>
            <Dropdown.Item as='button'>평점순</Dropdown.Item>
          </DropdownButton>
        </SortBox>

        <ItemContainer>
          <Items>
            <Item>
              <RatingBox>별점나오는곳</RatingBox>
              <TitleBox>
                타이틀타이틀타이틀타타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀이틀타이틀타이틀타이틀타이틀타이틀
              </TitleBox>
              <ContentBox>
                내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용
                내용 내용 내용 내용 내용 내용 내용
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              </ContentBox>
              <UserNameBox>유저이름</UserNameBox>
            </Item>
            <Item>
              <RatingBox>별점나오는곳</RatingBox>
              <TitleBox>
                타이틀타이틀타이틀타타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀이틀타이틀타이틀타이틀타이틀타이틀
              </TitleBox>
              <ContentBox>
                내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용
                내용 내용 내용 내용 내용 내용 내용
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              </ContentBox>
              <UserNameBox>유저이름</UserNameBox>
            </Item>
            <Item>
              <RatingBox>별점나오는곳</RatingBox>
              <TitleBox>
                타이틀타이틀타이틀타타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀이틀타이틀타이틀타이틀타이틀타이틀
              </TitleBox>
              <ContentBox>
                내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용
                내용 내용 내용 내용 내용 내용 내용
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              </ContentBox>
              <UserNameBox>유저이름</UserNameBox>
            </Item>
            <Item>
              <RatingBox>별점나오는곳</RatingBox>
              <TitleBox>
                타이틀타이틀타이틀타타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀이틀타이틀타이틀타이틀타이틀타이틀
              </TitleBox>
              <ContentBox>
                내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용
                내용 내용 내용 내용 내용 내용 내용
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              </ContentBox>
              <UserNameBox>유저이름</UserNameBox>
            </Item>
            <Item>
              <RatingBox>별점나오는곳</RatingBox>
              <TitleBox>
                타이틀타이틀타이틀타타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀타이틀이틀타이틀타이틀타이틀타이틀타이틀
              </TitleBox>
              <ContentBox>
                내용내용내용내용내용내내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용용내용내용내용내용내용
                내용 내용 내용 내용 내용 내용 내용
                내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
              </ContentBox>
              <UserNameBox>유저이름</UserNameBox>
            </Item>
          </Items>
        </ItemContainer>
      </MainBox>
    </Layout>
  );
};

export default Home;

const MainBox = styled.main``;
const SortBox = styled.section`
  text-align: right;
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
const Item = styled.a`
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
  &:link {
    text-decoration: none;
    color: #f2d589;
  }
  &:visited {
    text-decoration: none;
    color: #f2d589;
  }
  &:active {
    text-decoration: none;
    color: #f2d589;
  }
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