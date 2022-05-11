import React, { useState } from 'react';
import * as S from './style';
import Header from '../header/AdminHeader';
import Post from './post';
import { banner } from '../../assets/admin';

const Admin = () => {
  const [isClick, setIsClick] = useState<{ text: boolean; post: boolean; comment: boolean }>({
    text: true,
    post: false,
    comment: false,
  });
  const selectArr: Array<{ id: 'text' | 'post' | 'comment'; title: string }> = [
    { id: 'text', title: '글귀' },
    { id: 'post', title: '게시글' },
    { id: 'comment', title: '댓글' },
  ];
  const selectBtnClickEvent = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    switch (event.currentTarget.dataset.id) {
      case 'text':
        setIsClick({ text: true, post: false, comment: false });
        break;
      case 'post':
        setIsClick({ text: false, post: true, comment: false });
        break;
      case 'comment':
        setIsClick({ text: false, post: false, comment: true });
        break;
    }
  };

  return (
    <S.Admin>
      <Header />
      <S.Banner src={banner} alt='banner' />
      <S.SelectBox>
        {selectArr.map((data: { id: 'text' | 'post' | 'comment'; title: string }, idx) => {
          return (
            <S.SelectButton
              isClick={isClick[data.id]}
              data-id={data.id}
              key={idx}
              onClick={selectBtnClickEvent}
            >
              {data.title}
            </S.SelectButton>
          );
        })}
      </S.SelectBox>
      <Post />
    </S.Admin>
  );
};

export default Admin;
