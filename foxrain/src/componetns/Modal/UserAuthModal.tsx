import React, { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import { getRequest } from '../../api';
import SignupModal from './SignupModal';
import * as S from './style';

interface Props {
  modal: boolean;
  showModal : Dispatch<SetStateAction<boolean>>;
}

const UserAuthModal: FC<Props> = props => {
  const [signModal, setSignModal] = useState(false);
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");

  const onSucess = (data: any) => {
    const {access_token, userId} = data.data
    localStorage.setItem("accessToken", access_token);
    localStorage.setItem("userId", userId);
    alert("로그인이 되었습니다.");
    window.location.replace("/");
  }

  const onError = () => {
    alert("이메일과 비밀번호를 확인해 주세요");
  }

  const LoginClick = () => {
    const request = getRequest(2);
    request.post('/user/login', {email, password}).then(response => response.status === 200 ?  onSucess(response.data) : onError())
  }

  const SignupClick = useCallback(() => {
    props.showModal(false);
    setSignModal(true);
    }, [props.showModal]);

  return (
   <>
   {props.modal ?
   <S.ModalBG onClick={() => props.showModal(false)}>
   <S.Modal width={600} height={360}>
      <S.ModalText>
        <span>로그인</span>을 해주세요!
      </S.ModalText>
      <S.Input width={440} placeholder={'이메일을 입력해 주세요.'} onChange={e => setUserEmail(e.target.value)}/>
      <S.Input type="password" width={440} placeholder={'비밀번호를 입력해 주세요.'} onChange={e => setUserPassword
      (e.target.value)}/>
      <S.Button width={440} onClick={LoginClick}>로그인</S.Button>
      <S.SignText onClick={SignupClick}>회원이 아닌가요?</S.SignText>
    </S.Modal>
   </S.ModalBG>
    : null}
    <SignupModal modal={signModal} showModal={setSignModal} />
   </>
  
  );
};

export default UserAuthModal;
