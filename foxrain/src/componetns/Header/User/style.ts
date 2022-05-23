import styled from '@emotion/styled';

export const Container = styled.div`
  height: 75px;
  width: 100%;
  position: absolute;
  display: fixed;
  z-index: 10;
  @media only screen and (max-width: 1440px) {
    height: 55px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  height: 100%;
  min-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1440px) {
    min-width: 880px;
  }
`;

export const NavBox = styled.div`
  width: 345px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  cursor: pointer;
`;

export const Font = styled.div`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
`;

export const Profile = styled.img`
  cursor: pointer;
`;
