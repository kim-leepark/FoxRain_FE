import React from 'react';
import * as S from './style';
import PostContent from '../../PostContent';

const Post = () => {
  return (
    <S.Post>
      <PostContent title={'혜준아악!'} content={'나 너무 졸려!'} reportCtn={4} />
      <PostContent title={'집!!!!!'} content={'집을 너무나도 격렬하게 가고 싶다!'} reportCtn={4} />
      <PostContent title={'제목'} content={'내용'} reportCtn={3} />
      <PostContent title={'제목'} content={'내용'} reportCtn={2} />
      <PostContent title={'제목'} content={'내용'} reportCtn={1} />
      <PostContent title={'제목'} content={'내용'} reportCtn={5} />
      <PostContent title={'제목'} content={'내용'} reportCtn={4} />
    </S.Post>
  );
};

export default Post;
