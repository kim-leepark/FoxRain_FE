import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { getRequest } from '../../api';
import * as S from './style';

interface Props {
  modal : boolean;
  showModal : Dispatch<SetStateAction<boolean>>;
}

const SignupModal : FC<Props> = props => {
  const [email, setUserEmail] = useState("")
  const [name, setUserName] = useState("")
  const [password, setUserPassword] = useState("")

  const onSucess = () => {
    alert("회원가입이 완료되었습니다.");
    window.location.replace("/");
  }

  const onError = () => {
    alert("다시 확인해 주세요.");
  }

  const ClickSign = () => {
    const request = getRequest(2);
    request.post('/user/signup', {email, name, password}).then(response => {response.status === 201 ? onSucess() : onError()})
  }

  return (
   <>
   {props.modal ? 
   <>
    <S.ModalBG onClick={() => props.showModal(false)}>  </S.ModalBG>
    <S.Modal width={600} height={430}>
     <S.ModalText>
       <span>회원가입</span>을 해주세요!
     </S.ModalText>
     <S.Input width={440} placeholder={'이메일을 입력해 주세요.'} onChange={e => setUserEmail(e.target.value)}/>
     <S.Input type="password" width={440} placeholder={'비밀번호를 입력해 주세요.'} onChange={e => setUserPassword(e.target.value)}/>
     <S.Input width={440} placeholder={'이름을 입력해 주세요.'} onChange={e=> setUserName(e.target.value)} />
     <S.Button onClick={ClickSign} width={440}>회원가입</S.Button>
   </S.Modal>
   </>
     : null
   }
   </>
  );
};

export default SignupModal;
