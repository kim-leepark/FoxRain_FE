import React, { FC } from 'react';
import * as S from './style';
import PostContent from '../../PostContent';
import { useNavigate } from 'react-router';

interface Props {
  feed : Array<{
    id: number,
    title: string,
    content : string
  }>
}

const Post: FC<Props> = props => {
  const navigate = useNavigate();

  const onClickPost = (id : number) => {
    navigate(`/details/${id}`);
  }

  return (
     <S.Post>
    {props.feed.map((item, index) => {
      return (
        <PostContent title={item.title} content={item.content} isAdmin={false} onClick={() => onClickPost(item.id)}/>
      )
    })}
    </ S.Post>    
  );
};

export default Post;
