import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './PageWrapperStyle';
import Header from '../../components/Header';

const PageWrapper = props => {
  return (
    <Wrapper>
      <Header />
      {props.children}
    </Wrapper>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.object,
};

PageWrapper.defaultProps = {
  childrenchildren: {},
};

export default PageWrapper;
