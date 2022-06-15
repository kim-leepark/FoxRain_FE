import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router';
import { getRequest } from '../../api';
import * as S from './style';

interface Props {
  showModal: Dispatch<SetStateAction<boolean>>;
}

const AdminAuthModal: FC<Props> = props => {
  const { showModal } = props;
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.name === 'name') setName(event.currentTarget.value);
    else if (event.currentTarget.name === 'password') setPassword(event.currentTarget.value);
  };

  const loginBtnClickHandler = () => {
    const request = getRequest(1);
    request
      .put('/admin', { name: name, password: password })
      .then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
        navigate('/admin');
      })
      .catch(error => {
        alert('어드민 로그인을 실패하였습니다.');
        console.log(error);
      });
  };

  return (
    <>
      <S.ModalBG onClick={() => showModal(false)}></S.ModalBG>
      <S.Modal width={600} height={360}>
        <S.ModalText>
          <span>어드민 로그인</span>을 해주세요!
        </S.ModalText>
        <S.Input
          width={440}
          placeholder={'이름을 입력해 주세요.'}
          name='name'
          onChange={inputChangeHandler}
        />
        <S.Input
          width={440}
          placeholder={'비밀번호를 입력해 주세요.'}
          name='password'
          type='password'
          onChange={inputChangeHandler}
        />
        <S.Button width={440} onClick={loginBtnClickHandler}>
          로그인
        </S.Button>
      </S.Modal>
    </>
  );
};

export default AdminAuthModal;
