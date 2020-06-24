import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import {
  fetchSearchTopArticlesAction,
  clearSearchArticles,
} from '../../actions/ArticlesActions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledSearch, StyledSearchInput } from './StyledSearch';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
import ArticlesThumbnails from '../../components/ArticlesThumbnails';
import { StyledContainer } from '../../components/StyledContainer';
import Article from '../../components/Article';
import { articleFunctions } from '../../logic-functions';
import routes from '../../App/routes';
import WithLoader from '../../hocs/withLoader';

const Search = props => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const inputField = useRef(null);

  const locale = useSelector(state => state.AppReducer.locale);
  const articles = useSelector(state => state.ArticlesReducer.searchArticles);

  const { id, term } = useParams();
  const { search } = useLocation();
  const query = queryString.parse(search).q;

  let article = {};

  const history = useHistory();

  useEffect(() => {
    inputField.current && inputField.current.focus();

    if (term || query) {
      dispatch(fetchSearchTopArticlesAction(locale, term || query));
    }

    return () => {
      dispatch(clearSearchArticles());
    };
    /* eslint-disable-next-line */
  }, []);

  const handleInputChange = event => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    if (inputValue) {
      dispatch(fetchSearchTopArticlesAction(locale, inputValue));
      history.push(routes.search(locale, inputValue));
    }
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
            <StyledSearchInput
              value={inputValue}
              placeholder="Search term..."
              onChange={handleInputChange}
              ref={inputField}
            />
          </form>
          <WithLoader>
            <>
              {(query || term) && (
                <ArticlesThumbnails
                  baseRoute={routes.searchTerm(locale, query || term)}
                  articles={articles}
                />
              )}
              {query && articles.length === 0 && (
                <p>{`No search results for "${query}"`}</p>
              )}
            </>
          </WithLoader>
        </StyledSearch>
      )}
    </StyledContainer>
  );
};

export default Search;
