import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import * as S from './style';
import WProfile from '../../../assets/Header/WProfile.svg';
import BProfile from '../../../assets/Header/BProfile.svg';
import MLogo from '../../../assets/Header/MLogo.svg';
import DLogo from '../../../assets/Header/DLogo.svg';
import { useNavigate } from 'react-router';
import { UserAuthModal } from '../../Modal';

interface Props {
  isMain: boolean;
  setUploadPost: Dispatch<SetStateAction<boolean>>;
  setUploadPhrase: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<Props> = props => {
  const { isMain, setUploadPost, setUploadPhrase } = props;
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const Token = localStorage.getItem('accessToken');

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <S.Container position={isMain}>
        <S.Content>
          <div onClick={() => navigate(`/`)}>
            <img src={isMain ? MLogo : DLogo} />
          </div>
          <S.NavBox>
            <S.Font onClick={() => setUploadPhrase(true)}>글귀 작성하기</S.Font>
            <S.Font onClick={() => setUploadPost(true)}>게시글 작성하기</S.Font>
            {Token === null ? (
              <S.Font onClick={() => openModal()}>로그인</S.Font>
            ) : (
              <S.Img src={props.isMain ? WProfile : BProfile} onClick={() => navigate('/mypage')} />
            )}
          </S.NavBox>
        </S.Content>
      </S.Container>
      <UserAuthModal modal={showModal} showModal={setShowModal} />
    </>
  );
};

export default Header;
