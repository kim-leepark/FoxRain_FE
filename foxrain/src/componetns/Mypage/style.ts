import styled from '@emotion/styled';

export const Mypage = styled.div`
  width: 100%;
  min-width: 800px;
`;

export const BannerContent = styled.div`
  width: 100%;
  min-width: 800px;
  margin-bottom: 70px;
  position: relative;
  > img {
    width: 100%;
  }
  > p {
    font-size: 35px;
    color: #ffffff;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media only screen and (max-width: 1440px) {
    margin-bottom: 55px;
    > p {
      font-size: 26px;
    }
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
