import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StyledCategory, StyledBackLink } from './StyledCategory';
import ArticlesThumbnails from '../ArticlesThumbnails';
import Article from '../Article';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
import { ARTICLE_CATEGORIES } from '../../enums/ArticleCategories';
import routes from '../../App/routes';

const Category = props => {
  const { category, articles, locale } = props;

  const { id } = useParams();

  const categoryName = ARTICLE_CATEGORIES[category];

  let article = {};

  // if (id && articles.length > 0) {
  //   article = articleFunctions.getArticle(articles, id);
  // }

  return (
    <>
      <StyledCategory>
        {categoryName ? (
          <>
            <h1>
              Top {category} news from {LOCALE_COUNTRY_NAMES[locale]}
            </h1>
            <ArticlesThumbnails baseRoute={'#'} articles={articles} />
          </>
        ) : (
          <h1>{`Category "${category}" does not exist.`}</h1>
        )}
        <StyledBackLink>
          <Link to={routes.categories(locale)}>&lt; Back to list</Link>
        </StyledBackLink>
      </StyledCategory>
      {/* {id ? (
        <Article article={article} backLink={routes.home(locale)} />
      ) : (
        <StyledHome>
          <h1>Top news from {LOCALE_COUNTRY_NAMES[locale]}</h1>
          <ArticlesThumbnails
            baseRoute={routes.home(locale)}
            articles={articles}
          />
        </StyledHome>
      )} */}
    </>
  );
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
  articles: PropTypes.array,
  locale: PropTypes.string.isRequired,
};

Category.defaultProps = {
  articles: [],
};

export default Category;
