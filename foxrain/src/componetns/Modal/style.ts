import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { color } from '../../GlobalStyle';

export const ModalBG = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: fixed;
  z-index: 10;
  overflow: hidden;
`;

export const Modal = styled.div<{
  width: number;
  height: number;
}>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
  overflow: hidden;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  z-index: 20;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalText = styled.p`
  font-size: 30px;
  text-align: center;
  margin-bottom: 23px;
  line-height: 40px;
  > span {
    color: ${color.main};
    font-weight: bold;
  }
`;

export const Input = styled.input<{ width: number }>`
  ${({ width }) => css`
    width: ${width}px;
  `}
  height: 45px;
  border: 1px solid ${color.border};
  border-radius: 10px;
  background-color: ${color.inputBc};
  padding: 0px 15px;
  margin-bottom: 20px;
  font-size: 18px;
  ::placeholder {
    font-size: 18px;
    color: ${color.placeholder};
  }
`;

export const TextArea = styled.textarea<{ height: number }>`
  width: 650px;
  ${({ height }) => css`
    height: ${height}px;
  `}
  font-size: 18px;
  border: 1px solid ${color.border};
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: ${color.inputBc};
  resize: none;
  padding: 15px;
  ::placeholder {
    font-size: 18px;
    color: ${color.placeholder};
  }
`;

export const Button = styled.button<{ width: number }>`
  ${({ width }) => css`
    width: ${width}px;
  `}
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: ${color.main};
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const ReportList = styled.div`
  width: 650px;
  height: 350px;
  background-color: ${color.inputBc};
  border: 1px solid ${color.border};
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 5px 20px;
  overflow: auto;
  > p {
    font-size: 18px;
    padding: 15px 0px;
    border-bottom: 1px solid ${color.border};
  }
  > p:last-child {
    border-bottom: none;
  }
`;

export const SignText = styled.span`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 12px;
  cursor: pointer;
  > span:nth-child(2) {
    margin: 0px 5px;
  }
`;
