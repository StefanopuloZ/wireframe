import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { fetchTopArticlesAction } from '../../actions/ArticlesActions';
import { connect } from 'react-redux';
import { StyledHome } from './StyledHome';
import routes from '../../App/routes';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
import Thumbnail from '../../components/Thumbnail';

const HomeComponent = props => {
  const { fetchTopArticlesAction, articles, locale } = props;

  useEffect(() => {
    fetchTopArticlesAction(locale);
  }, []);

  console.log('articles', articles);

  const articlesDisplay = articles.map(article => (
    <Thumbnail locale={locale} key={article.id} article={article} />
  ));

  // const history = useHistory();

  // let { id } = useParams();

  // console.log('id', id);

  return (
    <StyledHome>
      <h1>Top news from {LOCALE_COUNTRY_NAMES[locale]}</h1>
      {articlesDisplay}
    </StyledHome>
  );
};

const mapStateToProps = state => ({
  locale: state.AppReducer.locale,
  articles: state.ArticlesReducer.topArticles,
});

const mapDispatchToProps = dispatch => ({
  fetchTopArticlesAction: country => dispatch(fetchTopArticlesAction(country)),
});

HomeComponent.propTypes = {
  fetchTopArticlesAction: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
};

HomeComponent.defaultProps = {};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
