import React from 'react';
import Header from '../Header/User';
import * as S from './style';
import Back from '../../assets/Main/Back.svg';

const Main = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Banner src={Back} />
        {/* post 넣는 곳*/}
      </S.Container>
    </>
  );
};

export default Main;
