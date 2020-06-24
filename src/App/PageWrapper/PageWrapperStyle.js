import styled from 'styled-components';
// import { colors, boxShadow, borderRadius, fonts } from '../../theme';

export const Wrapper = styled.div`
  min-height: 100vh;
  background: #ffffff;
  background: -moz-linear-gradient(
    top,
    #ffffff 0%,
    #dbdbdb 25%,
    #ffffff 50%,
    #dbdbdb 75%,
    #fefefe 100%
  );
  background: -webkit-linear-gradient(
    top,
    #ffffff 0%,
    #dbdbdb 25%,
    #ffffff 50%,
    #dbdbdb 75%,
    #fefefe 100%
  );
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #dbdbdb 25%,
    #ffffff 50%,
    #dbdbdb 75%,
    #fefefe 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#fefefe',GradientType=0 );
`;
