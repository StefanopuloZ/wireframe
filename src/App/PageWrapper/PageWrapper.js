import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper } from './PageWrapperStyle';

const PageWrapper = props => {
  return <Wrapper>{props.children}</Wrapper>;
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
