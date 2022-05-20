import styled from '@emotion/styled';

export const AdminHeader = styled.div`
  width: 100%;
  height: 75px;
  @media only screen and (max-width: 1440px) {
    height: 55px;
  }
  > div {
    width: 55.5%;
    min-width: 800px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > p:last-child {
      cursor: pointer;
    }
  }
`;

export const Text = styled.p`
  font-size: 20px;
  @media only screen and (max-width: 1440px) {
    font-size: 18px;
  }
`;
