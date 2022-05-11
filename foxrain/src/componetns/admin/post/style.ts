import styled from '@emotion/styled';

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

export const PostContent = styled.div`
  width: 413px;
  height: 230px;
  border: 0.75px solid #000000;
  cursor: pointer;
  padding: 20px;
  box-shadow: 3.5px 3.5px 3.5px rgba(0, 0, 0, 0.1);
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
  @media only screen and (max-width: 1440px) {
    font-size: 15px;
  }
`;
