import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledCategory, StyledBackLink } from './StyledCategory';
import ArticlesThumbnails from '../ArticlesThumbnails';
import Article from '../Article';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
import { ARTICLE_CATEGORIES } from '../../enums/ArticleCategories';
import routes from '../../App/routes';
import { articleFunctions } from '../../logic-functions';
import WithLoader from '../../hocs/withLoader';

const Category = props => {
  const { category, articles, locale, articleId } = props;

  const categoryName = ARTICLE_CATEGORIES[category];

  let article = {};

  if (articleId && articles.length > 0) {
    article = articleFunctions.getArticle(articles, articleId);
  }

  return (
    <StyledCategory>
      {categoryName ? (
        articleId ? (
          <Article
            categoryName={category}
            categoryLink={routes.categoriesCategory(locale, category)}
            article={article}
            backLink={routes.categories(locale)}
          />
        ) : (
          <>
            <h1>
              Top {category} news from {LOCALE_COUNTRY_NAMES[locale]}
            </h1>
            <WithLoader>
              <>
                <ArticlesThumbnails
                  baseRoute={routes.categoriesCategory(locale, category)}
                  articles={articles}
                />
                <StyledBackLink>
                  <Link to={routes.categories(locale)}>&lt; Back to list</Link>
                </StyledBackLink>
              </>
            </WithLoader>
          </>
        )
      ) : (
        <h1>{`Category "${category}" does not exist.`}</h1>
      )}
    </StyledCategory>
  );
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
  articles: PropTypes.array,
  locale: PropTypes.string.isRequired,
  articleId: PropTypes.string,
};

Category.defaultProps = {
  articles: [],
  articleId: null,
};

export default Category;
