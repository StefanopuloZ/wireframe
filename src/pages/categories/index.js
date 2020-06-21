import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchTopArticlesAction } from '../../actions/ArticlesActions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledCategories } from './StyledCategories';
import { LOCALE } from '../../enums/Locale';
import ArticlesThumbnails from '../../components/ArticlesThumbnails';
import { StyledContainer } from '../../components/StyledContainer';
import Article from '../../components/Article';
import { articleFunctions } from '../../logic-functions';
import routes from '../../App/routes';

const Categories = props => {
  const dispatch = useDispatch();

  const locale = useSelector(state => state.AppReducer.locale);
  const articles = useSelector(state => state.ArticlesReducer.topArticles);

  const { id } = useParams();

  let article = {};

  useEffect(() => {
    dispatch(fetchTopArticlesAction(locale));
  }, []);

  if (id && articles.length > 0) {
    article = articleFunctions.getArticle(articles, id);
  }

  return (
    <StyledContainer>
      {id ? (
        <Article article={article} backLink={routes.categories(locale)} />
      ) : (
        <StyledCategories>
          <h1>
            Top 5 news by categories from{' '}
            <span style={{ textTransform: 'uppercase' }}>{LOCALE[locale]}</span>
          </h1>
          <ArticlesThumbnails articles={articles} locale={locale} />
        </StyledCategories>
      )}
    </StyledContainer>
  );
};

export default Categories;
