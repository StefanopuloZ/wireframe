import styled from 'styled-components';
import { boxShadow } from '../../theme';

export const StyledArticlesThumbnails = styled.div`
  display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  width: 100%;
`;
