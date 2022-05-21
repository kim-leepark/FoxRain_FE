import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-width: 800px;
`;

export const Banner = styled.img`
  width: 100%;
  background-size: cover;
  margin-bottom: 38px;

  @media only screen and (max-width: 1440px) {
    margin-bottom: 28px;
  }
`;

export const Font = styled.p`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 50px;
  color: #ffffff;
  @media only screen and (max-width: 1440px) {
    font-size: 26px;
    top: 17%;
  }
`;

export const Name = styled(Font)`
  top: 45%;
  transform: translate(600%, -50%);
  font-size: 30px;
  line-height: 35px;
  @media only screen and (max-width: 1440px) {
    font-size: 20px;
    transform: translate(550%, 50%);
  }
`;
