import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { getRequestWithAccessToken } from '../../api';
import * as S from './style';

interface Props {
  id: number;
  type: string;
  showModal: Dispatch<SetStateAction<boolean>>;
}

const ReportModal: FC<Props> = props => {
  const { id, type, showModal } = props;
  const [content, setContent] = useState<string>('');
  const token = localStorage.getItem('accessToken');
  const oneRequest = getRequestWithAccessToken(token ? token : '', 1);
  const twoRequest = getRequestWithAccessToken(token ? token : '', 2);

  const contentChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
  };

  const reportBtnClickHandler = () => {
    if (type === 'comment') {
      twoRequest
        .post(`/comment/${id}/report`, { content: content })
        .then(response => {
          if (response.status === 201) {
            alert('신고되었습니다. 감사합니다.');
            window.location.reload();
          }
        })
        .catch(error => {
          console.log('comment report error: ' + error);
        });
    } else if (type === 'post' || type === 'phrase') {
      oneRequest
        .post(`/${type}/${id}/report`, { content: content })
        .then(response => {
          if (response.status === 201) {
            alert('신고되었습니다. 감사합니다.');
            window.location.reload();
          }
        })
        .catch(error => {
          console.log('post or phrase report error: ' + error);
          alert('신고 실패하였습니다. 두 번 이상 신고할 수 없습니다.');
        });
    }
  };

  return (
    <>
      <S.ModalBG onClick={() => showModal(false)}></S.ModalBG>
      <S.Modal width={800} height={600}>
        <S.ModalText>
          <span>신고하고 싶으신가요?</span>
          <br />
          사유를 작성해주시고 버튼을 눌러주세요.
        </S.ModalText>
        <S.TextArea
          placeholder={'신고 사유를 입력해 주세요.'}
          height={300}
          onChange={contentChangeHandler}
        />
        <S.Button width={650} onClick={reportBtnClickHandler}>
          신고하기
        </S.Button>
      </S.Modal>
    </>
  );
};

export default ReportModal;
