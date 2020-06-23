import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchSearchTopArticlesAction } from '../../actions/ArticlesActions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSearch } from './StyledSearch';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
import ArticlesThumbnails from '../../components/ArticlesThumbnails';
import { StyledContainer } from '../../components/StyledContainer';
import Article from '../../components/Article';
import { articleFunctions } from '../../logic-functions';
import routes from '../../App/routes';

const Search = props => {
  const dispatch = useDispatch();

  const locale = useSelector(state => state.AppReducer.locale);
  const articles = useSelector(state => state.ArticlesReducer.queryArticles);

  const { id, term } = useParams();
  const { search } = useLocation();

  console.log('params:', term, id, 'search: ', search);

  let article = {};

  useEffect(() => {
    if (term || search) {
      const query = term || search;
      dispatch(fetchSearchTopArticlesAction(locale, query));
    }
  }, []);

  if (id && articles.length > 0) {
    article = articleFunctions.getArticle(articles, id);
  }

  return (
    <StyledContainer>
      {id ? (
        <Article article={article} backLink={routes.search(locale)} />
      ) : (
        <StyledSearch>
          <h1>Top news from {LOCALE_COUNTRY_NAMES[locale]}</h1>
          <ArticlesThumbnails
            baseRoute={routes.searchTerm(locale)}
            articles={articles}
          />
        </StyledSearch>
      )}
    </StyledContainer>
  );
};

export default Search;
