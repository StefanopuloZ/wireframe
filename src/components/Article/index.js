import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledArticle, StyledImage, StyledBackLink } from './StyledArticle';
import WithLoader from '../../hocs/withLoader';

const Article = props => {
  const { article, backLink, categoryLink, categoryName } = props;

  const { title, urlToImage, content, description } = article ? article : {};

  return (
    <StyledArticle>
      <WithLoader>
        <>
          {article && article.id ? (
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
          {categoryLink && (
            <StyledBackLink>
              <Link to={categoryLink}>&lt; Back to {categoryName}</Link>
            </StyledBackLink>
          )}
        </>
      </WithLoader>
    </StyledArticle>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  backLink: PropTypes.string.isRequired,
  categoryLink: PropTypes.string,
  categoryName: PropTypes.string,
};

Article.defaultProps = {
  article: null,
  categoryLink: null,
  categoryName: '',
};

export default Article;
