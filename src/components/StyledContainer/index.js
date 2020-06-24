import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1260px;
  margin: auto;
  padding: 10px;
  width: 100%;
`;

export const StyledPageContainer = styled(StyledContainer)`
  min-height: calc(100vh - 100px);
`;
