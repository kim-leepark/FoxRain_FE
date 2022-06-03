import React, { useEffect, useState } from 'react';
import * as S from './style';
import Header from '../Header/Admin';
import Post from './post';
import { banner } from '../../assets/admin';
import { getRequestWithAccessToken } from '../../api';

const Admin = () => {
  const token = localStorage.getItem('accessToken');
  const [feed, setFeed] = useState([]);
  const [isClick, setIsClick] = useState<{ text: boolean; post: boolean; comment: boolean }>({
    text: true,
    post: false,
    comment: false,
  });

  useEffect(() => {
    if (isClick.text) {
      const request = getRequestWithAccessToken(token ? token : '', 1);
      request
        .get('/report/phrases?page=0&size=100')
        .then(response => {
          setFeed(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    } else if (isClick.post) {
      const request = getRequestWithAccessToken(token ? token : '', 1);
      request
        .get('/report/posts?page=0&size=100')
        .then(response => {
          setFeed(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    } else if (isClick.comment) {
      const request = getRequestWithAccessToken(token ? token : '', 2);
      request
        .get('/report/comments?page=0&size=100')
        .then(response => {
          setFeed(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [isClick]);

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
