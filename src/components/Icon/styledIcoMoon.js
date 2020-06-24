import styled from 'styled-components';

export const StyledIcoMoon = styled.div`
  width: 100%;
  cursor: pointer;
  transition: all ease 0.2s;
  svg {
    transition: all ease 0.2s;
  }

  &:hover {
    & svg {
      fill: ${props =>
        props.hoverColor ? props.hoverColor + ' !important' : ''};
    }
  }
`;
