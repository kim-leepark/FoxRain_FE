import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-width: 800px;
  padding: 50px 0px;
  position: absolute;
  border-top: 1px solid #c7c7c7;
`;

export const TextContent = styled.div`
  height: fit-content;
  padding-bottom: 38px;
  border-bottom: 1px solid #c7c7c7;
`;

export const Content = styled.div`
  max-width: 1280px;
  min-height: 400px;
  margin: 0 auto;
  @media only screen and (max-width: 1440px) {
    width: 880px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 30px;
  color: #000000;
`;

export const Text = styled.div``;

export const CommentBox = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  max-width: 1280px;
  @media only screen and (max-width: 1440px) {
    width: 880px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  margin-bottom: 19px;
  justify-content: space-between;
`;

export const CommentInput = styled.input`
  background: #fbfbfb;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  width: 92%;
  height: 60px;
  padding: 10px;
  @media only screen and (max-width: 1440px) {
    max-width: 90%;
  }
`;

export const CommentBtn = styled.div`
  background: #6085c8;
  border-radius: 15px;
  width: 10%;
  height: 60px;
  padding-top: 19px;
  font-size: 16px;
  margin-left: 50px;
  text-align: center;
  cursor: pointer;
  text-align: center;
  color: #ffffff;
`;

export const CommtentNull = styled.div`
  margin-top: 19px;
  color: #c7c7c7;
`;

export const CommentContentBox = styled.div`
  min-width: 84%;
  height: fit-content;
  padding: 10px;  
  width: 92%;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  @media only screen and (max-width: 1440px) {
    max-width: 90%;
  }
`;

export const DeclarationBox = styled(CommentBtn)`
  height: 22px;
  color: #ffffff;
  padding-top: 2px;
  text-align: center;
  font-size: 10px;
  background: #FF0000;
  border-radius: 10px;
  cursor: pointer;
`;
