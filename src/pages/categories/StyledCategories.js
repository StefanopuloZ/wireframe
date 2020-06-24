import styled from 'styled-components';
import { borderRadius, colors } from '../../theme';

export const StyledCategories = styled.div`
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

export const StyledCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 100px);
  border: 1px solid ${colors.black};
  border-radius: ${borderRadius.standard};
  padding: 0 10px;
`;

export const StyledCategoryCarousel = styled.div`
  margin: 50px 0;
`;
