import React, { FC, useMemo } from 'react';
import * as S from '../style';
import PostContent from '../../PostContent';

interface Props {
  content: Array<{
    postId: number;
    title: string;
    content: string;
  }>;
}

const Post: FC<Props> = props => {
  const { content } = props;
  const postContent = useMemo(() => {
    if (content.length !== 0 && content[0].postId !== null)
      return content.map(data => {
        <PostContent title={data.title} content={data.content} key={data.postId} isAdmin={false} />;
      });
    else
      return (
        <>
          <div />
          <S.NoContent>작성하신 게시물이 없습니다.</S.NoContent>
        </>
      );
  }, [content]);

  return <S.Post>{postContent}</S.Post>;
};

export default Post;
