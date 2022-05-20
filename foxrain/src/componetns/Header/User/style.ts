import styled from '@emotion/styled';

export const Container = styled.div`
  height: 75px;
  width: 100%;
  @media only screen and (max-width: 1440px) {
    height: 55px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  width: 1280px;
  height: 100%;
  min-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img``;

export const NavBox = styled.div`
  width: 345px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
