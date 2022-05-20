import React from 'react';
import Header from '../Header/User';
import * as S from './style';
import Back from '../../assets/Main/Back.svg';
import Post from './Post';

const Main = () => {
  return (
    <>
      <S.Container>
        <Header />
        <S.Banner src={Back}></S.Banner>
        <S.Font>삶은 계란이다.</S.Font>
        <S.Name>기몌준</S.Name>
        <Post />
      </S.Container>
    </>
  );
};

export default Main;
