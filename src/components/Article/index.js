import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledArticle } from './StyledArticle';

const Article = props => {
  const { article } = props.article;

  // useEffect(() => {
  //   dispatch(fetchTopArticlesAction(locale));
  // }, []);

  return <StyledArticle>article</StyledArticle>;
};

Article.propTypes = {
  article: PropTypes.object,
};

Article.defaultProps = {
  article: {},
};

export default Article;
