import styled from 'styled-components';
import { boxShadow } from '../../theme';

export const StyledArticlesCarouselWrapper = styled.div``;

export const StyledExpandCollapse = styled.span`
  cursor: pointer;
  background-color: green;
`;

export const StyledArticlesCarousel = styled.div`
  display: flex;
  overflow: hidden;
`;

export const StyledArrow = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 100;
  display: ${props => (props.hidden ? 'none' : 'flex')};
  font-size: 20px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: lightgray;
  height: 30px;
  min-width: 30px;
  margin: auto;
  border-radius: 100%;
  user-select: none;
`;

export const StyledItemsWrapper = styled.div`
  display: ${props => (props.expanded ? 'grid' : 'flex')};
  position: relative;
  left: ${props => (props.pxPosition ? props.pxPosition + 'px' : '0')};
  transition: all ease 0.5s;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
`;

export const StyledCarouselThumbnail = styled.div`
  min-width: ${props => (props.minWidth ? '350px' : '0')};
  display: flex;
`;

export const StyledCarouselWrapper = styled.div`
  flex: 2;
  overflow: hidden;
  margin-right: ${props => props.expanded ? '0' : '7px'};
`;
