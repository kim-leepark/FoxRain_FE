import React from 'react';
import Header from '../Header/User';
import * as S from './style';
import Back from '../../assets/Main/Back.svg';
import Post from './Post';

const Main = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Banner src={Back} />
        <Post />
      </S.Container>
    </>
  );
};

export default Main;
