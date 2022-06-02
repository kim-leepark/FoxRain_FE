import React, { FC } from 'react';
import * as S from './style';
import WProfile from '../../../assets/Header/WProfile.svg';
import BProfile from '../../../assets/Header/BProfile.svg';
import { useNavigate } from 'react-router';

interface Props {
  isMain: boolean;
}

const Header: FC<Props> = props => {
  const navigate = useNavigate();

  return (
    <S.Container position={props.isMain}>
      <S.Content>
        <div onClick={() => navigate(`/`)}>로고 위치</div>
        <S.NavBox>
          <S.Font>글귀 작성하기</S.Font>
          <S.Font>게시글 작성하기</S.Font>
          <S.Img src={props.isMain ? WProfile : BProfile} onClick={() => navigate(`/mypage`)} />
        </S.NavBox>
      </S.Content>
    </S.Container>
  );
};

export default Header;
