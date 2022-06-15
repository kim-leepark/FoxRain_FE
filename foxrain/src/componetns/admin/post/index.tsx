import React, { FC, useMemo } from 'react';
import PostContent from '../../PostContent';
import * as S from '../style';

type phraseType = {
  id: number;
  content: string;
  man: string;
  reportNum: number;
};

type postType = {
  id: number;
  title: string;
  content: string;
  reportNum: number;
};

type commentType = {
  commentId: number;
  content: string;
  reportedNum: number;
};

interface Props {
  phrase: Array<phraseType>;
  post: Array<postType>;
  comment: Array<commentType>;
  setListModal: React.Dispatch<React.SetStateAction<boolean>>;
  setId: React.Dispatch<React.SetStateAction<number>>;
}

const Post: FC<Props> = props => {
  const { phrase, post, comment, setId, setListModal } = props;

  const contentClickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let dataId: number = event.currentTarget.id ? Number(event.currentTarget.id) : -1;
    setId(dataId);
    setListModal(true);
  };

  const postContent = useMemo(() => {
    if (phrase.length > 0) {
      return phrase.map(data => {
        return (
          <PostContent
            title={data.man}
            content={data.content}
            key={data.id}
            isAdmin={true}
            reportCnt={data.reportNum}
            id={data.id}
            onClick={contentClickHandler}
          />
        );
      });
    } else if (post.length > 0) {
      return post.map(data => {
        return (
          <PostContent
            title={data.title}
            content={data.content}
            key={data.id}
            reportCnt={data.reportNum}
            isAdmin={true}
            id={data.id}
            onClick={contentClickHandler}
          />
        );
      });
    } else if (comment.length > 0) {
      return comment.map(data => {
        return (
          <PostContent
            title={''}
            content={data.content}
            key={data.commentId}
            reportCnt={data.reportedNum}
            isAdmin={true}
            id={data.commentId}
            onClick={contentClickHandler}
          />
        );
      });
    } else {
      return (
        <>
          <div />
          <S.NoContent>신고된 내용이 없습니다.</S.NoContent>
        </>
      );
    }
  }, [phrase, post, comment]);

  return <S.Post>{postContent}</S.Post>;
};

export default Post;
