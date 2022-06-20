import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRequest, getRequestWithAccessToken } from '../../api';
import Header from '../Header/User';
import { PostWriteModal, ReportModal, TextWriteModal } from '../Modal';
import * as S from './style';

const Details = () => {
  const [uploadPost, setUploadPost] = useState<boolean>(false); // 게시글 작성 모달
  const [uploadPhrase, setUploadPhrase] = useState<boolean>(false); // 글귀 작성 모달
  const [reportModal, setReportModal] = useState<boolean>(false); // 신고 모달
  const [reportType, setReportType] = useState<string>(''); // 게시글 신고인지 댓글 신고인지
  const [reportId, setReportId] = useState<number>(0); // 신고 id
  const [title, setTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [comment, setComment] = useState<
    Array<{
      id: number;
      content: string;
      reportedComment: Boolean;
      createdAt: string;
    }>
  >();
  const [content, setContent] = useState('');
  const { id } = useParams<{ id: string }>();
  const token = localStorage.getItem('accessToken');
  const [commentErrorStatus, setCommnetErrorStatus] = useState<boolean>(false);

  useEffect(() => {
    const request = getRequest(1);
    request
      .get(`/post/` + Number(id))
      .then(response => {
        setTitle(response.data.title);
        setPostContent(response.data.content);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const requset = getRequestWithAccessToken(token ? token : '', 2);
    requset
      .get(`/comment/` + Number(id) + `?page=1&size=100`)
      .then(response => {
        setComment(response.data.data);
      })
      .catch(error => {
        setCommnetErrorStatus(true);
        console.log(error);
      });
  }, []);

  const onClickWriteComment = () => {
    console.log(content);
    const requset = getRequestWithAccessToken(token ? token : '', 2);
    requset
      .post(`/comment/` + Number(id), { content })
      .then(response => {
        alert('댓글 작성이 완료되었습니다.');
      })
      .catch(error => {
        setCommnetErrorStatus(true);
        console.log(error);
      });
  };

  return (
    <>
      <Header isMain={false} setUploadPost={setUploadPost} setUploadPhrase={setUploadPhrase} />
      <S.Container>
        <S.TextContent>
          <S.Content>
            <S.FlexBox>
              <S.Title>{title}</S.Title>
              <S.DeclarationBox
                onClick={() => {
                  setReportModal(true);
                  setReportType('post');
                  setReportId(Number(id));
                }}
              >
                신고하기
              </S.DeclarationBox>
            </S.FlexBox>
            <S.Text>{postContent}</S.Text>
          </S.Content>
        </S.TextContent>
        <S.CommentBox>
          <S.FlexBox>
            <S.CommentInput
              placeholder='댓글을 입력해 주세요.'
              onChange={e => setContent(e.target.value)}
            />
            <S.CommentBtn onClick={onClickWriteComment}>작성하기</S.CommentBtn>
          </S.FlexBox>
          {commentErrorStatus ? <S.CommtentNull>댓글이 없습니다.</S.CommtentNull> : null}
          {comment &&
            comment.map((item, index) => {
              return (
                <S.FlexBox>
                  <S.CommentContentBox key={index}>{item.content}</S.CommentContentBox>
                  <S.DeclarationBox
                    onClick={() => {
                      setReportModal(true);
                      setReportType('comment');
                      setReportId(item.id);
                    }}
                  >
                    신고하기
                  </S.DeclarationBox>
                </S.FlexBox>
              );
            })}
        </S.CommentBox>
      </S.Container>
      {uploadPost && <PostWriteModal showModal={setUploadPost} />}
      {uploadPhrase && <TextWriteModal showModal={setUploadPhrase} />}
      {reportModal && <ReportModal id={reportId} type={reportType} showModal={setReportModal} />}
    </>
  );
};

export default Details;
