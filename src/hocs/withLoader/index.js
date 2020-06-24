import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyledLoaderWrapper } from './StyledWithLoader';
import Spinner from '../../components/Spinner';

const WithLoader = props => {
  const { children } = props;

  const loaderStatus = useSelector(state => state.AppReducer.loaderStatus);

  return loaderStatus <= 0 ? (
    { ...children }
  ) : (
    <StyledLoaderWrapper>
      <Spinner />
    </StyledLoaderWrapper>
  );
};

WithLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

WithLoader.defaultProps = {};

export default WithLoader;
