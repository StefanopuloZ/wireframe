import styled from 'styled-components';
import { borderRadius, colors, boxShadow } from '../../theme';

export const StyledSearch = styled.div`
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

export const StyledSearchInput = styled.input`
  padding: 15px 20px;
  font-size: 20px;
  border-radius: ${borderRadius.standard};
  outline: none;
  border: 1px solid gray;
  margin: 50px auto;
  background-color: ${colors.white};

  &:focus {
    background-color: lightgray;
  }
`;
