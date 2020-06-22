import styled from 'styled-components';
import { media, colors } from '../../theme';

export const StyledArticlesCarouselWrapper = styled.div``;

export const StyledTitleWrapper = styled.div`
  display: flex;
  margin-left: 40px;
`;

export const StyledCategoryLink = styled.h2`
  display: flex;
  align-items: center;
  font-size: 18px;
  text-decoration: underline;
  margin-right: 30px;

  &:hover {
    color: ${colors.linkColor};
    transition: all ease 0.2s;
  }
`;

export const StyledExpandCollapse = styled.span`
  cursor: pointer;
  position: relative;
  display: flex;
  font-size: 16px;
  letter-spacing: -3px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding-right: 2px;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  user-select: none;
  transform: ${props => (props.expanded ? 'rotate(90deg)' : 'rotate(-90deg)')};
  transition: all ease 0.4s;
`;

export const StyledArticlesCarousel = styled.div`
  display: flex;
  overflow: hidden;
`;

export const StyledArrow = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 100;
  display: flex;
  visibility: ${props => (props.hidden ? 'hidden' : 'visible')};
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
  opacity: ${props => (props.disabled ? '0.5' : '1')};
`;

export const StyledItemsWrapper = styled.div`
  display: ${props => (props.expanded ? 'grid' : 'flex')};
  position: relative;
  left: ${props => (props.pxPosition ? props.pxPosition + 'px' : '0')};
  transition: all ease 0.5s;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  @media ${media.small} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${media.medium} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${media.large} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledCarouselThumbnail = styled.div`
  min-width: ${props => (props.minWidth ? '350px' : '0')};
  display: flex;
`;

export const StyledCarouselWrapper = styled.div`
  flex: 2;
  overflow: hidden;
  margin-right: ${props => (props.expanded ? '0' : '7px')};
`;
