import React from 'react';
import * as S from './style';

const SignupModal = () => {
  return (
    <S.Modal width={600} height={430}>
      <S.ModalText>
        <span>회원가입</span>을 해주세요!
      </S.ModalText>
      <S.Input width={440} placeholder={'이메일을 입력해 주세요.'} />
      <S.Input width={440} placeholder={'비밀번호를 입력해 주세요.'} />
      <S.Input width={440} placeholder={'이름을 입력해 주세요.'} />
      <S.Button width={440}>회원가입</S.Button>
    </S.Modal>
  );
};

export default SignupModal;
