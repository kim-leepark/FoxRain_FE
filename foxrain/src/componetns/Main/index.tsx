import React, { useEffect, useState } from 'react';
import Header from '../Header/User';
import * as S from './style';
import Banner1 from '../../assets/Main/Banner1.svg';
import Banner2 from '../../assets/Main/Banner2.svg';
import Banner3 from '../../assets/Main/Banner3.svg';
import Post from './Post';
import { getRequest } from '../../api';
import { PostWriteModal } from '../Modal';

const Main = () => {
  const token = localStorage.getItem('accessToken');
  const [id, setId] = useState(Number); // 글귀 아이디
  const [content, setContent] = useState('');
  const [man, setMan] = useState('');
  const [report, setReport] = useState(Boolean); // 신고했는지 안 했는지 구분하는
  const backgroundArr = [Banner1, Banner2, Banner3];
  const randomIndex = Math.floor(Math.random() * backgroundArr.length);
  const [feed, setFeed] = useState<
    Array<{
      postId: number;
      title: string;
      content: string;
    }>
  >();
  const [uploadPost, setUploadPost] = useState<boolean>(false); // 게시글 작성 모달

  useEffect(() => {
    const request = getRequest(1);
    request
      .get(`/phrase`)
      .then(response => {
        setId(response.data.id);
        setContent(response.data.content);
        setMan(response.data.man);
        setReport(response.data.report);
      })
      .catch(error => {
        console.log(error);
      });
    request.get(`posts?page=0&size=100`).then(response => {
      setFeed(response.data);
    });
  }, []);

  return (
    <>
      <Header isMain={true} setUploadPost={setUploadPost} />
      <S.Container>
        <S.Banner src={backgroundArr[randomIndex]}></S.Banner>
        <S.Font>{content}</S.Font>
        <S.Name>{man}</S.Name>
        <Post feed={feed ? feed : []} />
      </S.Container>
      {uploadPost && <PostWriteModal showModal={setUploadPost} />}
    </>
  );
};

export default Main;
