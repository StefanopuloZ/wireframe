import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchTopArticlesAction } from '../../actions/ArticlesActions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledHome } from './StyledHome';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
import ArticlesThumbnails from '../../components/ArticlesThumbnails';
import { StyledContainer } from '../../components/StyledContainer';
import Article from '../../components/Article';

const Home = props => {
  const dispatch = useDispatch();

  const locale = useSelector(state => state.AppReducer.locale);
  const articles = useSelector(state => state.ArticlesReducer.topArticles);

  let article = {};

  useEffect(() => {
    dispatch(fetchTopArticlesAction(locale));
  }, []);

  console.log('articles', articles);

  const { id } = useParams();

  console.log('id', id);

  return (
    <StyledContainer>
      {id ? (
        <Article article={article} />
      ) : (
        <StyledHome>
          <h1>Top news from {LOCALE_COUNTRY_NAMES[locale]}</h1>
          <ArticlesThumbnails articles={articles} locale={locale} />
        </StyledHome>
      )}
    </StyledContainer>
  );
};

export default Home;
