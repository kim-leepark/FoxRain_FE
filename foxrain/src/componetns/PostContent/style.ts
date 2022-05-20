import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { color } from '../../GlobalStyle';

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

export const PostContent = styled.div<{ border: boolean }>`
  width: 413px;
  height: 230px;
  ${({ border }) => css`
    border: 0.75px solid ${border ? '#000000' : color.main};
  `}
  cursor: pointer;
  padding: 20px;
  box-shadow: 3.5px 3.5px 3.5px rgba(0, 0, 0, 0.1);
  position: relative;
  @media only screen and (max-width: 1440px) {
    width: 310px;
  }
`;

export const PostTitle = styled.p`
  font-size: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 12px;
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
  }
`;

export const PostText = styled.p`
  font-size: 20px;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 5px;
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const ReportLine = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const ReportIcon = styled.img`
  width: 18px;
  height: 22px;
  float: right;
`;
export const ReportCtn = styled.p`
  float: right;
  font-size: 15px;
  margin-left: 5px;
`;
