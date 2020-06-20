import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { testAction, testFetchRequest } from '../../actions/TestActions';
import {
  fetchSearchTopArticlesAction,
  fetchCategoryArticlesAction,
  fetchTopArticlesAction,
} from '../../actions/ArticlesActions';
import { connect } from 'react-redux';
import { StyledHome } from './StyledHome';

const HomeComponent = props => {
  const {
    testText,
    testAction,
    testFetchRequest,
    user,
    fetchSearchTopArticlesAction,
    fetchCategoryArticlesAction,
    fetchTopArticlesAction,
  } = props;

  const country = 'us';
  const query = 'trump';
  const category = 'sports';

  useEffect(() => {
    // fetchSearchTopArticlesAction(country, query);
    // fetchCategoryArticlesAction(country, category);
    fetchTopArticlesAction(country);
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
  fetchSearchTopArticlesAction: (country, query) =>
    dispatch(fetchSearchTopArticlesAction(country, query)),
  fetchCategoryArticlesAction: (country, category) =>
    dispatch(fetchCategoryArticlesAction(country, category)),
  fetchTopArticlesAction: country => dispatch(fetchTopArticlesAction(country)),
});

HomeComponent.propTypes = {
  testText: PropTypes.string,
  testAction: PropTypes.func.isRequired,
  testFetchRequest: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  fetchSearchTopArticlesAction: PropTypes.func.isRequired,
  fetchCategoryArticlesAction: PropTypes.func.isRequired,
  fetchTopArticlesAction: PropTypes.func.isRequired,
};

HomeComponent.defaultProps = {
  testText: 'default prop type',
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
