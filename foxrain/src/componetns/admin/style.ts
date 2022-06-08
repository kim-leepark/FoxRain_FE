import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Admin = styled.div`
  width: 100%;
  min-width: 800px;
`;

export const Banner = styled.img`
  width: 100%;
  min-width: 800px;
  margin-bottom: 38px;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 28px;
  }
`;

export const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  > button:nth-child(2) {
    border-right: none;
    border-left: none;
  }
`;

export const SelectButton = styled.button<{ isClick: boolean }>`
  display: block;
  width: calc(1280px / 3);
  height: 56px;
  border: 1px solid #000000;
  text-align: center;
  ${({ isClick }) => css`
    background-color: ${isClick ? '#000000' : '#ffffff'};
    color: ${isClick ? '#ffffff' : '#000000'};
  `}
  font-size: 25px;
  cursor: pointer;
  :hover {
    background-color: #000000;
    color: #ffffff;
  }
  @media only screen and (max-width: 1440px) {
    width: 320px;
    height: 42px;
    font-size: 20px;
  }
`;

export const Post = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-items: center;
  gap: 20px;
  margin: 0 auto;
  margin-top: 39px;
  @media only screen and (max-width: 1440px) {
    width: 960px;
    gap: 15px;
    margin-top: 29px;
  }
`;

export const NoContent = styled.p`
  font-size: 20px;
`;
