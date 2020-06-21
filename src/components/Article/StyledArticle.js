import styled from 'styled-components';
import { boxShadow, borderRadius, colors } from '../../theme';

export const StyledArticle = styled.div`
  border: 1px solid gray;
  margin: 0 10px 10px 10px;
  padding: 10px;
  text-align: start;
  background-color: ${colors.white};

  h1 {
    text-align: start;
    font-weight: bold;
    font-size: 28px;
    padding-bottom: 10px;
  }

  p {
    margin: 20px 0;
  }
`;

export const StyledImage = styled.div`
  display: flex;
  margin: 10px 0;
  overflow: hidden;
  max-width: 900px;

  img {
    border-radius: ${borderRadius.standard};
    object-fit: cover;
    object-position: center;
    max-width: 100%;
  }
`;
