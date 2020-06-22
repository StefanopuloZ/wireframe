import styled from 'styled-components';
import { boxShadow } from '../../theme';

export const StyledArticlesCarouselWrapper = styled.div`
  border: 1px solid pink;
`;

export const StyledExpandCollapse = styled.span`
  cursor: pointer;
  background-color: green;
`;

export const StyledArticlesCarousel = styled.div`
  display: flex;
  border: 1px solid red;
`;

export const StyledArrow = styled.div`
  background-color: yellow;
  cursor: pointer;
`;

export const StyledItemsWrapper = styled.div`
  /* change expand */
  display: flex;
  flex: 2;
  border: 1px dotted black;
  /* change expand */
  overflow: hidden;
  /* change expand */
  /* 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px; */
`;

export const StyledCarouselThumbnail = styled.div`
  background-color: yellow;
  min-width: 350px; /* change expand */
  display: flex;
`;
