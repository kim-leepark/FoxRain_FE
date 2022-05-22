import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div<{ position: boolean }>`
  height: 75px;
  width: 100%;
  ${({ position }) => css`
    position: ${position ? 'absolute' : 'none'};
    color: ${position ? '#ffffff' : '#000000'};
  `}
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
  cursor: pointer;
`;

export const Profile = styled.img`
  cursor: pointer;
`;
