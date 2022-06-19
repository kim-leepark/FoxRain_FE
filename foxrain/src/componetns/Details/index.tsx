import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRequest, getRequestWithAccessToken } from '../../api';
import Header from '../Header/User';
import { PostWriteModal, TextWriteModal } from '../Modal';
import * as S from './style';

const Details = () => {
  const [uploadPost, setUploadPost] = useState<boolean>(false); // 게시글 작성 모달
  const [uploadPhrase, setUploadPhrase] = useState<boolean>(false); // 글귀 작성 모달
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [comment, setComment] = useState<
  Array<{
    content: string;
    reportedComment : Boolean;
    createdAt: string;
  }>
>();
  const [content, setContent] = useState("");
  const { id } = useParams<{ id: string }>();
  const token = localStorage.getItem('accessToken');
  const [commentErrorStatus, setCommnetErrorStatus] = useState<boolean>(false); 
  
  useEffect(() => {
    const request = getRequest(1);
    request.get(`/post/` + Number(id)).then(response => {
      setTitle(response.data.title);
      setPostContent(response.data.content);
    }).catch(error => {
      console.log(error);
    })
  }, [])

  useEffect(() => {
    const requset = getRequestWithAccessToken(token ? token : '', 2);
    requset.get(`/comment/` + Number(id) + `?page=1&size=100`).then(response => {
      setComment(response.data.data);
      console.log(response.data);
    }).catch(error => {
      setCommnetErrorStatus(true);
      console.log(error);
    }) 
  }, [])

  const onClickWriteComment = () => {
    console.log(content);
    const requset = getRequestWithAccessToken(token ? token : '', 2);
    requset.post(`/comment/` + Number(id), content).then(response => {
      alert("댓글 작성이 완료되었습니다.");
    }).catch(error => {
      setCommnetErrorStatus(true);
      console.log(error);
    })
  }

  return (
    <>
      <Header isMain={false} setUploadPost={setUploadPost} setUploadPhrase={setUploadPhrase} />
      <S.Container>
        <S.TextContent>
          <S.Content>
            <S.Title>{title}</S.Title>
            <S.Text>
              {postContent}
            </S.Text>
          </S.Content>
        </S.TextContent>
        <S.CommentBox>
          <S.FlexBox>
          <S.CommentInput placeholder='댓글을 입력해 주세요.' onChange={e => setContent(e.target.value)}/>
          <S.CommentBtn onClick={onClickWriteComment}>작성하기</S.CommentBtn>
          </S.FlexBox>
          {commentErrorStatus ? 
            <S.CommtentNull>댓글이 없습니다.</S.CommtentNull> 
            :
            null
          }
          {comment && comment.map((item, index) => {
            return (
              <>
                <S.CommentContentBox key={index}>{item.content}</S.CommentContentBox>
              </>
            )
          })}
        </S.CommentBox>
      </S.Container>
      {uploadPost && <PostWriteModal showModal={setUploadPost} />}
      {uploadPhrase && <TextWriteModal showModal={setUploadPhrase} />}
    </>
  );
};

export default Details;
