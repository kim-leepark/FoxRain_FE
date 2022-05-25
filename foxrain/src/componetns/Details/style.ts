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
  border: 1px solid yellow;
  margin: 0 auto;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #000000;
`;

export const Text = styled.div``;

export const CommentBox = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  max-width: 1280px;
`;

export const CommentInput = styled.input`
  background: #fbfbfb;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  width: 1100px;
  height: 60px;
  padding-left: 10px;
`;

export const CommentBtn = styled.div`
  background: #6085c8;
  border-radius: 15px;
  width: 130px;
  height: 60px;
  padding: 17px 10px;
  font-size: 20px;
  margin-left: 50px;
  text-align: center;
  color: #ffffff;
`;
