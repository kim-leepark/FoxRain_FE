import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-width: 800px;
`;

export const Banner = styled.img`
  width: 100%;
  height: 500px;
  background-size: cover;
  margin-bottom: 38px;
  @media only screen and (max-width: 1440px) {
    margin-bottom: 28px;
  }
`;
