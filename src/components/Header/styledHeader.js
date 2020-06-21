import styled from 'styled-components';
import { boxShadow, colors } from '../../theme';

export const StyledHeader = styled.div`
  display: flex;
  border: 1px solid gray;
  margin: 10px 10px 0px 10px;
  position: relative;
  top: 11px;
  z-index: 10;
  height: 50px;
  max-height: 50px;
`;

export const StyledLocaleBox = styled.div`
  display: flex;
  border: 1px solid gray;
  height: 49px;
  margin-left: auto;
  border-right: none;
  border-top: none;
`;

export const StyledNav = styled.div`
  display: flex;
  border: 1px solid gray;
  height: 49px;
`;

export const StyledLocaleButton = styled.div`
  display: flex;
  width: 50px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: ${props => (props.selected ? 'gray' : 'none')};
  color: ${props => (props.selected ? colors.white : colors.black)};
  transition: all ease 0.2s;

  &:hover {
    color: ${colors.white};
    background-color: ${props => (props.selected ? 'gray' : colors.teal)};
  }
`;
