import React from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageWrapper);
