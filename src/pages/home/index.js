import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchTopArticlesAction } from '../../actions/ArticlesActions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledHome } from './StyledHome';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
import Thumbnail from '../../components/Thumbnail';

const Home = props => {
  const dispatch = useDispatch();

  const locale = useSelector(state => state.AppReducer.locale);
  const articles = useSelector(state => state.ArticlesReducer.topArticles);

  useEffect(() => {
    dispatch(fetchTopArticlesAction(locale));
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

export default Home;
