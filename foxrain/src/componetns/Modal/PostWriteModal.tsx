import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { getRequestWithAccessToken } from '../../api';
import * as S from './style';

interface Props {
  showModal: Dispatch<SetStateAction<boolean>>;
}

const PostWriteModal: FC<Props> = props => {
  const { showModal } = props;
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const token = localStorage.getItem('accessToken');

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const contentChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
  };

  const uploadBtnClickHandler = () => {
    const request = getRequestWithAccessToken(token ? token : '', 1);
    request
      .post('/post', {
        title: title,
        content: content,
      })
      .then(response => {
        if (response.status === 201) {
          alert('게시글 작성을 성공했습니다.');
          window.location.reload();
        }
      })
      .catch(error => {
        console.log('upload post error: ' + error);
      });
  };

  return (
    <>
      <S.ModalBG onClick={() => showModal(false)}></S.ModalBG>
      <S.Modal width={800} height={600}>
        <S.ModalText>
          <span>고민이 있거나 힘들면</span>
          <br />
          모두에게 공유해주세요.
        </S.ModalText>
        <S.Input width={650} placeholder={'제목을 입력해 주세요.'} onChange={titleChangeHandler} />
        <S.TextArea
          placeholder={'내용을 입력해 주세요.'}
          height={235}
          onChange={contentChangeHandler}
        />
        <S.Button width={650} onClick={uploadBtnClickHandler}>
          공유하기
        </S.Button>
      </S.Modal>
    </>
  );
};

export default PostWriteModal;
