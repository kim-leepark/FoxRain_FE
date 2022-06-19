import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRequest } from '../../api';
import Header from '../Header/User';
import { PostWriteModal, TextWriteModal } from '../Modal';
import * as S from './style';

const Details = () => {
  const [uploadPost, setUploadPost] = useState<boolean>(false); // 게시글 작성 모달
  const [uploadPhrase, setUploadPhrase] = useState<boolean>(false); // 글귀 작성 모달
  const { postid } = useParams<{ postid: string }>();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    const request = getRequest(1);
    request.get(`/post/` + Number(id)).then(response => {
      setTitle(response.data.title);
      setContent(response.data.content);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <Header isMain={false} setUploadPost={setUploadPost} setUploadPhrase={setUploadPhrase} />
      <S.Container>
        <S.TextContent>
          <S.Content>
            <S.Title>{title}</S.Title>
            <S.Text>
              {content}
            </S.Text>
          </S.Content>
        </S.TextContent>
        <S.CommentBox>
          <S.InputBox>
          <S.CommentInput placeholder='댓글을 입력해 주세요.' />
          <S.CommentBtn>작성하기</S.CommentBtn>
          </S.InputBox>
          <S.CommentContentBox>댓글 공간</S.CommentContentBox>
        </S.CommentBox>
      </S.Container>
      {uploadPost && <PostWriteModal showModal={setUploadPost} />}
      {uploadPhrase && <TextWriteModal showModal={setUploadPhrase} />}
    </>
  );
};

export default Details;
