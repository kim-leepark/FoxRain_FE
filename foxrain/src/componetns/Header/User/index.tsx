import React from 'react';
import * as S from './style';
import Profile from '../../../assets/Header/Profile.svg';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Content>
        <div onClick={() => navigate(`/`)}>로고 위치</div>
        <S.NavBox>
          <S.Font>글귀 작성하기</S.Font>
          <S.Font>게시글 작성하기</S.Font>
          <S.Img src={Profile} onClick={() => navigate(`/mypage`)} />
        </S.NavBox>
      </S.Content>
    </S.Container>
  );
};

export default Header;
