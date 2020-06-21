import React from 'react';
import PropTypes from 'prop-types';
import { StyledArticle, StyledImage } from './StyledArticle';

const Article = props => {
  const { article } = props;

  const { title, urlToImage, content, description } = article;

  console.log('ARTICLE', article);

  return (
    <StyledArticle>
      <h1>{title}</h1>
      <StyledImage>
        <img src={urlToImage} alt={title} />
      </StyledImage>
      <p>{content || description}</p>
    </StyledArticle>
  );
};

Article.propTypes = {
  article: PropTypes.object,
};

Article.defaultProps = {
  article: {},
};

export default Article;
