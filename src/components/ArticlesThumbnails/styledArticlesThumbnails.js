import styled from 'styled-components';
import { media } from '../../theme';

export const StyledArticlesThumbnails = styled.div`
  display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-auto-rows: 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  width: 100%;

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
