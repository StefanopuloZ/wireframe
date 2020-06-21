import React from 'react';
import PropTypes from 'prop-types';
import { StyledArticlesThumbnails } from './styledArticlesThumbnails';
import Thumbnail from '../Thumbnail';

const ArticlesThumbnails = props => {
  const { articles, locale } = props;

  const articlesDisplay = articles.map(article => (
    <Thumbnail locale={locale} key={article.id} article={article} />
  ));

  return <StyledArticlesThumbnails>{articlesDisplay}</StyledArticlesThumbnails>;
};

ArticlesThumbnails.propTypes = {
  articles: PropTypes.array,
  locale: PropTypes.string.isRequired,
};

ArticlesThumbnails.defaultProps = {
  articles: [],
};

export default ArticlesThumbnails;
