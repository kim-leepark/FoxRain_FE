import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { getRequestWithAccessToken } from '../../api';
import * as S from './style';

interface Props {
  id: number;
  type: string;
  showModal: Dispatch<SetStateAction<boolean>>;
}

type content = {
  id: number;
  content: string;
};

type comment = {
  commentId: number;
  content: string;
};

const ReportListModal: FC<Props> = props => {
  const { id, type, showModal } = props;
  const [content, setContent] = useState<Array<content>>();
  const [comment, setComment] = useState<Array<comment>>();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    if (type === 'comment') {
      const request = getRequestWithAccessToken(token ? token : '', 2);
      request
        .get(`comment/${id}/report/reasons`)
        .then(response => {
          setComment(response.data);
        })
        .catch(error => {
          console.log('comment error: ' + error);
        });
    } else {
      const request = getRequestWithAccessToken(token ? token : '', 1);
      request
        .get(`${type}/${id}/report/reasons`)
        .then(response => {
          setContent(response.data);
        })
        .catch(error => {
          console.log('post or phrase error: ' + error);
        });
    }
  }, [id, token]);

  return (
    <>
      <S.ModalBG onClick={() => showModal(false)}></S.ModalBG>
      <S.Modal width={800} height={600}>
        <S.ModalText>
          <span>신고 사유</span> 목록입니다.
        </S.ModalText>
        <S.ReportList>
          {content &&
            type !== 'comment' &&
            content.map(data => {
              return <p key={data.id}>{data.content}</p>;
            })}
          {comment &&
            type === 'comment' &&
            comment.map(data => {
              return <p key={data.commentId}>{data.content}</p>;
            })}
        </S.ReportList>
        <S.Button width={650}>삭제하기</S.Button>
      </S.Modal>
    </>
  );
};

export default ReportListModal;
