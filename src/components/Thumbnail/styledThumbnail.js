import styled from 'styled-components';
import { boxShadow, borderRadius, colors } from '../../theme';

export const StyledThumbnailWrapper = styled.div`
  padding: 10px;
`;

export const StyledThumbnail = styled.div`
  box-shadow: ${boxShadow.standard};
  border-radius: ${borderRadius.standard};
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 10px;
  text-align: start;

  h3 {
    min-height: 60px;
    font-weight: bold;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  span {
    padding: 5px 0;
    word-break: break-all;
  }
`;

export const StyledThumbImage = styled.div`
  width: 100%;
  height: 130px;
  min-height: 50%;
  display: flex;
  border-radius: ${borderRadius.standard};
  overflow: hidden;
  margin: 5px 0;
`;

export const StyledMoreLink = styled.div`
  cursor: pointer;
  margin-top: auto;
  min-width: 60px;
  width: max-content;
  margin-left: auto;
  transition: all .2s ease;

  &:hover {
    color: ${colors.linkColor};
  }
`;
