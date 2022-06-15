import React, { Dispatch, FC, SetStateAction } from 'react';
import * as S from './style';

interface Props {
  showModal: Dispatch<SetStateAction<boolean>>;
}

const AdminAuthModal: FC<Props> = props => {
  const { showModal } = props;
  return (
    <>
      <S.ModalBG onClick={() => showModal(false)}></S.ModalBG>
      <S.Modal width={600} height={360}>
        <S.ModalText>
          <span>어드민 로그인</span>을 해주세요!
        </S.ModalText>
        <S.Input width={440} placeholder={'이메일을 입력해 주세요.'} />
        <S.Input width={440} placeholder={'비밀번호를 입력해 주세요.'} />
        <S.Button width={440}>로그인</S.Button>
      </S.Modal>
    </>
  );
};

export default AdminAuthModal;
