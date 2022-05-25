import React from 'react';
import * as S from './style';

const ReportModal = () => {
  return (
    <S.Modal width={800} height={600}>
      <S.ModalText>
        <span>신고하고 싶으신가요?</span>
        <br />
        사유를 작성해주시고 버튼을 눌러주세요.
      </S.ModalText>
      <S.TextArea placeholder={'신고 사유를 입력해 주세요.'} height={300} />
      <S.Button width={650}>공유하기</S.Button>
    </S.Modal>
  );
};

export default ReportModal;
