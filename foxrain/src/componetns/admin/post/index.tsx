import React from 'react';
import * as S from './style';
import PostContent from './PostContent';

const Post = () => {
  return (
    <S.Post>
      <PostContent reportCtn={1} />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
    </S.Post>
  );
};

export default Post;
