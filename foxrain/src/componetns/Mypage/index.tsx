import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../Header/User';
import { banner } from '../../assets/mypage';
import Post from './post';
import { getRequestWithAccessToken } from '../../api';

const Mypage = () => {
  const token = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('userId');
  const [feed, setFeed] = useState<
    Array<{
      postId: number;
      title: string;
      content: string;
    }>
  >();
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const request = getRequestWithAccessToken(token ? token : '', 2);
    request
      .get(`/user/${userId}?page=1&size=100`)
      .then(response => {
        setFeed(response.data.data);
        setUserName(response.data.data[0].name);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <S.Mypage>
      <Header isMain={false} />
      <S.BannerContent>
        <img src={banner} alt='banner' />
        <p>
          {userName}님 <br /> 모두가 잠든 밤에 피는 꽃도 있습니다.
        </p>
      </S.BannerContent>
      <Post content={feed ? feed : []} />
    </S.Mypage>
  );
};

export default Mypage;
