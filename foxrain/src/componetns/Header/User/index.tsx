import React, { FC, useState } from 'react';
import * as S from './style';
import WProfile from '../../../assets/Header/WProfile.svg';
import BProfile from '../../../assets/Header/BProfile.svg';
import { useNavigate } from 'react-router';
import {UserAuthModal} from '../../Modal';

interface Props {
  isMain: boolean;
}

const Header: FC<Props> = props => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const Token = localStorage.getItem("accessToken");

  const openModal = () => {
    setShowModal(true);
  }

  return (
    <>    
    <S.Container position={props.isMain}>
    <S.Content>
      <div onClick={() => navigate(`/`)}>로고 위치</div>
      <S.NavBox>
        <S.Font>글귀 작성하기</S.Font>
        <S.Font>게시글 작성하기</S.Font>
        {Token === null ? <S.Font onClick={() => openModal()}>로그인</S.Font> : <S.Img src={props.isMain ? WProfile : BProfile} onClick={() => navigate("/mypage")}/>}
      </S.NavBox>
    </S.Content>
  </S.Container>
  <UserAuthModal showModal={showModal}/>
    </>

  );
};

export default Header;
