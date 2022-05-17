import React from 'react';
import * as S from './style';
import PostContent from './PostContent';

const Post = () => {
  return (
    <S.Post>
      <PostContent title={'제목'} content={'내용'} reportCtn={1} />
    </S.Post>
  );
};

export default Post;
