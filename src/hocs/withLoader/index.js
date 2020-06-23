import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const WithLoader = props => {
  const { children } = props;

  const loaderStatus = useSelector(state => state.AppReducer.loaderStatus);

  return loaderStatus <= 0 ? { ...children } : <p>loading...</p>;
};

WithLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

WithLoader.defaultProps = {};

export default WithLoader;
