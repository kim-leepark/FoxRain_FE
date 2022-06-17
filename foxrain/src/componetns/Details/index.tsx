import React, { useState } from 'react';
import Header from '../Header/User';
import { PostWriteModal, TextWriteModal } from '../Modal';
import * as S from './style';

const Details = () => {
  const [uploadPost, setUploadPost] = useState<boolean>(false); // 게시글 작성 모달
  const [uploadPhrase, setUploadPhrase] = useState<boolean>(false); // 글귀 작성 모달

  return (
    <>
      <Header isMain={false} setUploadPost={setUploadPost} setUploadPhrase={setUploadPhrase} />
      <S.Container>
        <S.TextContent>
          <S.Content>
            <S.Title>요즘따라</S.Title>
            <S.Text>
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을
              못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야... 왜냐면 집을 못가서야...
              왜냐면 집을 못가서야... 왜냐면 집을 못가서야...{' '}
            </S.Text>
          </S.Content>
        </S.TextContent>

        <S.CommentBox>
          <S.CommentInput placeholder='댓글을 입력해 주세요.' />
          <S.CommentBtn>작성하기</S.CommentBtn>
        </S.CommentBox>
      </S.Container>
      {uploadPost && <PostWriteModal showModal={setUploadPost} />}
      {uploadPhrase && <TextWriteModal showModal={setUploadPhrase} />}
    </>
  );
};

export default Details;
