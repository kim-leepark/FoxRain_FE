import React from 'react';
import * as S from './style';
import Profile from '../../../assets/Header/Profile.svg';

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <div>로고 위치</div>
        <S.NavBox>
          <S.Font>글귀 작성하기</S.Font>
          <S.Font>게시글 작성하기</S.Font>
          <S.Profile src={Profile} />
        </S.NavBox>
      </S.Content>
    </S.Container>
  );
};

export default Header;
