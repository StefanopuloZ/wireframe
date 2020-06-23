import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import {
  fetchSearchTopArticlesAction,
  clearSearchArticles,
} from '../../actions/ArticlesActions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSearch } from './StyledSearch';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
import ArticlesThumbnails from '../../components/ArticlesThumbnails';
import { StyledContainer } from '../../components/StyledContainer';
import Article from '../../components/Article';
import { articleFunctions } from '../../logic-functions';
import routes from '../../App/routes';
import queryString from 'query-string';

const Search = props => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const locale = useSelector(state => state.AppReducer.locale);
  const articles = useSelector(state => state.ArticlesReducer.searchArticles);

  const { id, term } = useParams();
  const { search } = useLocation();
  const query = queryString.parse(search).q;

  console.log('params:', term, id, 'search: ', search, 'parsed:', query);

  let article = {};

  const history = useHistory();

  useEffect(() => {
    console.log('yo');
    if (term || query) {
      dispatch(fetchSearchTopArticlesAction(locale, term || query));
    }

    return () => {
      dispatch(clearSearchArticles());
    };
  }, []);

  const handleInputChange = event => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    dispatch(fetchSearchTopArticlesAction(locale, inputValue));
    history.push(routes.search(locale, inputValue));
  };

  if (id && articles.length > 0) {
    article = articleFunctions.getArticle(articles, id);
  }

  return (
    <StyledContainer>
      {id ? (
        <Article article={article} backLink={routes.search(locale)} />
      ) : (
        <StyledSearch>
          <h1>Search top new from {LOCALE_COUNTRY_NAMES[locale]} by term:</h1>

          <form onSubmit={handleSearchSubmit}>
            <input
              value={inputValue}
              placeholder="Search term..."
              onChange={handleInputChange}
            />
          </form>

          {(query || term) && (
            <ArticlesThumbnails
              baseRoute={routes.searchTerm(locale, query || term)}
              articles={articles}
            />
          )}
        </StyledSearch>
      )}
    </StyledContainer>
  );
};

export default Search;
