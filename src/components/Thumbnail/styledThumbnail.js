import styled from 'styled-components';
import { boxShadow } from '../../theme';

export const StyledThumbnail = styled.div`
  box-shadow: ${boxShadow.standard};
  margin: 10px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 200px;
  }
`;
