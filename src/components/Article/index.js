import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledArticle, StyledImage, StyledBackLink } from './StyledArticle';

const Article = props => {
  const { article, backLink } = props;

  const { title, urlToImage, content, description } = article ? article : {};

  return (
    <StyledArticle>
      {article ? (
        <>
          <h1>{title}</h1>
          <StyledImage>
            <img src={urlToImage} alt={title} />
          </StyledImage>
          <p>{content || description}</p>
        </>
      ) : (
        <p>Could not find article</p>
      )}
      <StyledBackLink>
        <Link to={backLink}>&lt; Back to list</Link>
      </StyledBackLink>
    </StyledArticle>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  backLink: PropTypes.string.isRequired,
};

Article.defaultProps = {
  article: null,
};

export default Article;
