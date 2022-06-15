import React from 'react';
import { useNavigate } from 'react-router';
import * as S from './style';

const AdminHeader = () => {
  const navigate = useNavigate();
  const logOutBtnClickHandler = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <S.AdminHeader>
      <div>
        <S.Text>여우비 어드민 서비스</S.Text>
        <S.Text onClick={logOutBtnClickHandler}>로그아웃</S.Text>
      </div>
    </S.AdminHeader>
  );
};

export default AdminHeader;
