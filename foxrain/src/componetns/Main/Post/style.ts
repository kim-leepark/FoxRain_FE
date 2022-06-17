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
  margin-bottom: 20px ;
  @media only screen and (max-width: 1440px) {
    width: 960px;
    gap: 15px;
    margin-top: 29px;
  }
`;
