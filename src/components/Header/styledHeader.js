import styled from 'styled-components';
import { colors, media } from '../../theme';

const getHoverColor = (disabled = false, selected = false) => {
  if (selected) {
    return colors.white;
  } else if (disabled) {
    return colors.black;
  } else {
    return colors.white;
  }
};

export const StyledHeader = styled.div`
  display: flex;
  border: 1px solid ${colors.gray};
  margin: 10px 10px 0px 10px;
  position: relative;
  top: 11px;
  z-index: 10;
  height: 50px;
  max-height: 50px;
`;

export const StyledLocaleBox = styled.div`
  display: flex;
  border: 1px solid ${colors.gray};
  height: 49px;
  margin-left: auto;
  border-right: none;
  border-top: none;
`;

export const StyledLocaleButton = styled.div`
  display: flex;
  width: 50px;
  height: 100%;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => (props.selected ? colors.gray : 'none')};
  color: ${props => (props.selected ? colors.white : colors.black)};
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  transition: all ease 0.2s;

  &:hover {
    color: ${props => getHoverColor(props.disabled, props.selected)};
    background-color: ${props =>
      props.selected ? colors.gray : props.disabled ? 'none' : colors.teal};
  }
`;

export const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => (props.isOpen ? '148px' : '0px')};
  overflow: hidden;
  background-color: ${colors.white};
  border: ${props => (props.isOpen ? `1px solid ${colors.gray}` : 'none')};
  border-top: none;
  transition: all 0.4s ease;

  @media ${media.small} {
    display: flex;
    flex-direction: row;
    background-color: transparent;
    border: none;
    height: 100%;
  }
`;

export const StyledLinkItem = styled(StyledLocaleButton)`
  width: 150px;
  border-right: none;
  height: 49px;

  @media ${media.small} {
    border-right: 1px solid ${colors.gray};
  }
`;

export const StyledHumburgerIcon = styled.div`
  display: flex;
  min-width: 49px;
  min-height: 49px;
  cursor: pointer;

  svg {
    transform: scale(0.7);
  }

  @media ${media.small} {
    display: none;
  }
`;
