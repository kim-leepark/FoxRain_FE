import React from 'react';
import * as S from './style';

const PostWriteModal = () => {
  return (
    <S.Modal width={800} height={600}>
      <S.ModalText>
        <span>고민이 있거나 힘들면</span>
        <br />
        모두에게 공유해주세요.
      </S.ModalText>
      <S.Input width={650} placeholder={'제목을 입력해 주세요.'} />
      <S.TextArea placeholder={'내용을 입력해 주세요.'} />
      <S.Button width={650}>공유하기</S.Button>
    </S.Modal>
  );
};

export default PostWriteModal;
