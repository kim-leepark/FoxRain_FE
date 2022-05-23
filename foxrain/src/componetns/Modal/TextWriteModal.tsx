import React from 'react';
import * as S from './style';

const TextWriteModal = () => {
  return (
    <S.Modal width={800} height={600}>
      <S.ModalText>
        <span>힘</span>이 되는 글귀를
        <br />
        모두에게 공유해주세요.
      </S.ModalText>
      <S.Input width={650} placeholder={'작성자를 입력해 주세요.'} />
      <S.TextArea placeholder={'글귀를 입력해 주세요.'} />
      <S.Button width={650}>공유하기</S.Button>
    </S.Modal>
  );
};

export default TextWriteModal;
