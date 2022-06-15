import React, { FC } from 'react';
import * as S from './style';
import PostContent from '../../PostContent';

interface Props {
  feed : Array<{
    postId: number,
    title: string,
    content : string
  }>
}

const Post: FC<Props> = props => {

  return (
    <>
     <S.Post>
    {props.feed.map((item, index) => {
      return (
        <PostContent title={item.title} content={item.content} isAdmin={false} key={index}/>
      )
    })}
    </ S.Post>
    </>
    
  );
};

export default Post;
