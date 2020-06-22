import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StyledCategory } from './StyledCategory';
import ArticlesThumbnails from '../ArticlesThumbnails';
import Article from '../Article';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
// import routes from '../../App/routes';

const Category = props => {
  const { category, articles, locale } = props;

  const { id } = useParams();

  let article = {};

  // if (id && articles.length > 0) {
  //   article = articleFunctions.getArticle(articles, id);
  // }

  return (
    <StyledCategory>
      <StyledCategory>
        <h1>Top {category} from {LOCALE_COUNTRY_NAMES[locale]}</h1>
        <ArticlesThumbnails baseRoute={'#'} articles={articles} />
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
    </StyledCategory>
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
