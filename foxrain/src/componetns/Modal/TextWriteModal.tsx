import React, { Dispatch, FC, SetStateAction } from 'react';
import * as S from './style';

interface Props {
  showModal: Dispatch<SetStateAction<boolean>>;
}

const TextWriteModal: FC<Props> = props => {
  const { showModal } = props;

  return (
    <>
      <S.ModalBG onClick={() => showModal(false)}></S.ModalBG>
      <S.Modal width={800} height={600}>
        <S.ModalText>
          <span>힘</span>이 되는 글귀를
          <br />
          모두에게 공유해주세요.
        </S.ModalText>
        <S.Input width={650} placeholder={'작성자를 입력해 주세요.'} />
        <S.TextArea placeholder={'글귀를 입력해 주세요.'} height={235} />
        <S.Button width={650}>공유하기</S.Button>
      </S.Modal>
    </>
  );
};

export default TextWriteModal;
