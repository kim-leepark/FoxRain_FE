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
  const oneRequest = getRequestWithAccessToken(token ? token : '', 1);
  const twoRequest = getRequestWithAccessToken(token ? token : '', 2);

  useEffect(() => {
    if (type === 'comment') {
      twoRequest
        .get(`comment/${id}/report/reasons`)
        .then(response => {
          setComment(response.data.data);
        })
        .catch(error => {
          console.log('comment error: ' + error);
        });
    } else {
      oneRequest
        .get(`${type}/${id}/report/reasons`)
        .then(response => {
          setContent(response.data);
        })
        .catch(error => {
          console.log('post or phrase error: ' + error);
        });
    }
  }, [id, token]);

  const deleteBtnClickHandler = () => {
    if (type === 'post') {
      oneRequest
        .delete(`/admin/post/${id}`)
        .then(response => {
          if (response.status === 204) {
            alert('게시글 삭제을 성공했습니다.');
            window.location.reload();
          }
        })
        .catch(error => {
          console.log('post delete error: ' + error);
        });
    } else {
      alert('삭제 불가능합니다.');
    }
  };

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
        <S.Button width={650} onClick={deleteBtnClickHandler}>
          삭제하기
        </S.Button>
      </S.Modal>
    </>
  );
};

export default ReportListModal;
