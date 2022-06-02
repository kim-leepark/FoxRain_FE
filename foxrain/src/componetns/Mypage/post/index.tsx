import React, { FC, useMemo } from 'react';
import * as S from '../style';
import PostContent from '../../PostContent';

interface Props {
  content: Array<{
    postId: number;
    title: string;
    content: string;
  }> | null;
}

const Post: FC<Props> = props => {
  const { content } = props;
  const postContent = useMemo(() => {
    if (content)
      return content.map(data => {
        <PostContent title={data.title} content={data.content} key={data.postId} isAdmin={false} />;
      });
  }, [content]);

  return <S.Post>{postContent}</S.Post>;
};

export default Post;
