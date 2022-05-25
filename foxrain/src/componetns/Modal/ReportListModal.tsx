import React from 'react';
import * as S from './style';

const ReportListModal = () => {
  return (
    <div>
      <S.Modal width={800} height={600}>
        <S.ModalText>
          <span>신고 사유</span> 목록입니다.
        </S.ModalText>
        <S.ReportList>
          <p>글귀가 아픈 제 마음을 더 후벼파서 그만 보고 싶습니다.</p>
          <p>글귀가 아픈 제 마음을 더 후벼파서 그만 보고 싶습니다.</p>
          <p>
            글귀가 아픈 제 마음을 더 후벼파서 그만 보고 싶습니다. 글귀가 아픈 제 마음을 더 후벼파서
            그만 보고 싶습니다.
          </p>
          <p>
            글귀가 아픈 제 마음을 더 후벼파서 그만 보고 싶습니다. 글귀가 아픈 제 마음을 더 후벼파서
            그만 보고 싶습니다.
          </p>
        </S.ReportList>
        <S.Button width={650}>삭제하기</S.Button>
      </S.Modal>
    </div>
  );
};

export default ReportListModal;
