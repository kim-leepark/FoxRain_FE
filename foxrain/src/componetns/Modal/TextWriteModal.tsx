import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { getRequestWithAccessToken } from '../../api';
import * as S from './style';

interface Props {
  showModal: Dispatch<SetStateAction<boolean>>;
}

const TextWriteModal: FC<Props> = props => {
  const { showModal } = props;
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const token = localStorage.getItem('accessToken');

  const authorChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.currentTarget.value);
  };

  const contentChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value);
  };

  const uploadBtnClickHandler = () => {
    const request = getRequestWithAccessToken(token ? token : '', 1);
    request
      .post('/phrase', {
        man: author,
        content: content,
      })
      .then(response => {
        if (response.status === 201) {
          alert('글귀 작성을 성공했습니다.');
          window.location.reload();
        }
      })
      .catch(error => {
        console.log('upload phrase error: ' + error);
      });
  };

  return (
    <>
      <S.ModalBG onClick={() => showModal(false)}></S.ModalBG>
      <S.Modal width={800} height={600}>
        <S.ModalText>
          <span>힘</span>이 되는 글귀를
          <br />
          모두에게 공유해주세요.
        </S.ModalText>
        <S.Input
          width={650}
          placeholder={'작성자를 입력해 주세요.'}
          onChange={authorChangeHandler}
        />
        <S.TextArea
          placeholder={'글귀를 입력해 주세요.'}
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

export default TextWriteModal;
