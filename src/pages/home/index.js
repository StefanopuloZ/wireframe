import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { testAction, testFetchRequest } from '../../actions/TestActions';
import { connect } from 'react-redux';
import { StyledHome } from './StyledHome';

const HomeComponent = props => {
  const { testText, testAction, testFetchRequest, user } = props;

  testAction('new Text');

  useEffect(() => {
    testFetchRequest();
  }, []);

  return (
    <StyledHome>
      <h1>Home page</h1>
      <div>{testText}</div>
      <p>{user}</p>
    </StyledHome>
  );
};

const mapStateToProps = state => ({
  testText: state.TestReducer.testText,
  user: state.TestReducer.user,
});

const mapDispatchToProps = dispatch => ({
  testAction: text => dispatch(testAction(text)),
  testFetchRequest: () => dispatch(testFetchRequest()),
});

HomeComponent.propTypes = {
  testText: PropTypes.string,
  testAction: PropTypes.func.isRequired,
  testFetchRequest: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

HomeComponent.defaultProps = {
  testText: 'default prop type',
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
