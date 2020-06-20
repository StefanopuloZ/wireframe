import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledThumbnail } from './styledThumbnail';
import routes from '../../App/routes';

const Thumbnail = props => {
  const { title, urlToImage, description, locale } = props;

  return (
    <StyledThumbnail>
      <h2>{title}</h2>
      <img src={urlToImage} alt={title} />
      <span>{description}</span>
      <p>
        <Link to={routes.homeArticle(locale, title)}>More ...</Link>
      </p>
    </StyledThumbnail>
  );
};

Thumbnail.propTypes = {
  title: PropTypes.string,
  urlToImage: PropTypes.string,
  description: PropTypes.string,
  locale: PropTypes.string.isRequired,
};

Thumbnail.defaultProps = {
  title: 'News',
  urlToImage: '',
  description: '',
};

export default Thumbnail;
