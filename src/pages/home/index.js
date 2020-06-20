import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  fetchSearchTopArticlesAction,
  fetchCategoryArticlesAction,
  fetchTopArticlesAction,
} from '../../actions/ArticlesActions';
import { connect } from 'react-redux';
import { StyledHome } from './StyledHome';
import { ARTICLE_CATEGORIES } from '../../enums';
import { useParams } from 'react-router-dom';

const HomeComponent = props => {
  const {
    fetchSearchTopArticlesAction,
    fetchCategoryArticlesAction,
    fetchTopArticlesAction,
    articles,
    locale,
  } = props;

  let { id } = useParams();

  console.log('id', id);

  useEffect(() => {
    fetchTopArticlesAction(locale);
  }, []);

  // const query = 'trump';

  // useEffect(() => {
  //   fetchSearchTopArticlesAction(locale, query);
  // }, []);

  // useEffect(() => {
  //   Object.keys(ARTICLE_CATEGORIES).forEach(category => {
  //     fetchCategoryArticlesAction(locale, category);
  //   });
  // }, []);

  return (
    <StyledHome>
      <h1>Home page</h1>
    </StyledHome>
  );
};

const mapStateToProps = state => ({
  locale: state.AppReducer.locale,
  articles: state.ArticlesReducer.topArticles,
});

const mapDispatchToProps = dispatch => ({
  fetchSearchTopArticlesAction: (country, query) =>
    dispatch(fetchSearchTopArticlesAction(country, query)),
  fetchCategoryArticlesAction: (country, category) =>
    dispatch(fetchCategoryArticlesAction(country, category)),
  fetchTopArticlesAction: country => dispatch(fetchTopArticlesAction(country)),
});

HomeComponent.propTypes = {
  fetchSearchTopArticlesAction: PropTypes.func.isRequired,
  fetchCategoryArticlesAction: PropTypes.func.isRequired,
  fetchTopArticlesAction: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
};

HomeComponent.defaultProps = {};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
