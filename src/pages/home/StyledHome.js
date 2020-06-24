import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  border: 1px solid gray;
  margin: 0 10px 10px 10px;
  padding: 10px;

  h1 {
    text-align: start;
    font-weight: bold;
    font-size: 28px;
    margin-left: 10px;
    padding-bottom: 10px;
  }
`;
