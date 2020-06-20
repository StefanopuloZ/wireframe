import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import {
  fetchSearchTopArticlesAction,
  fetchCategoryArticlesAction,
  fetchTopArticlesAction,
} from '../../actions/ArticlesActions';
import { connect } from 'react-redux';
import { StyledHome } from './StyledHome';
import { ARTICLE_CATEGORIES } from '../../enums';
import routes from '../../App/routes';

const CategoriesComponent = props => {
  const {
    fetchSearchTopArticlesAction,
    fetchCategoryArticlesAction,
    fetchTopArticlesAction,
    articles,
    locale,
  } = props;

  const history = useHistory();

  // let { id } = useParams();

  // console.log('id', id);

  // useEffect(() => {
  //   fetchTopArticlesAction(locale);
  // }, []);

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
      <h1>Categories</h1>
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

CategoriesComponent.propTypes = {
  fetchSearchTopArticlesAction: PropTypes.func.isRequired,
  fetchCategoryArticlesAction: PropTypes.func.isRequired,
  fetchTopArticlesAction: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
};

CategoriesComponent.defaultProps = {};

const Categories = connect(mapStateToProps, mapDispatchToProps)(CategoriesComponent);

export default Categories;