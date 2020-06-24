import styled from 'styled-components';
import { colors } from '../../theme';

export const StyledCategory = styled.div`
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

export const StyledBackLink = styled.div`
  cursor: pointer;
  margin: 30px 0;
  min-width: 60px;
  width: max-content;
  margin-right: auto;
  transition: all 0.2s ease;

  &:hover {
    color: ${colors.linkColor};
  }
`;
