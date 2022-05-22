import React from 'react';
import * as S from './style';
import Header from '../Header/User';
import { banner } from '../../assets/mypage';
import Post from './post';

const Mypage = () => {
  return (
    <S.Mypage>
      <Header isMain={false} />
      <S.BannerContent>
        <img src={banner} alt='banner' />
        <p>
          김혜준님 <br /> 모두가 잠든 밤에 피는 꽃도 있습니다.
        </p>
      </S.BannerContent>
      <Post />
    </S.Mypage>
  );
};

export default Mypage;
