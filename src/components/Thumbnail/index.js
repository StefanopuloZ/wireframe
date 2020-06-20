import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledThumbnail } from './styledThumbnail';
import routes from '../../App/routes';

const Thumbnail = props => {
  const { article, locale } = props;

  const { urlToImage, description, title, id } = article;

  return (
    <StyledThumbnail>
      <h2>{title}</h2>
      <img src={urlToImage} alt={title} />
      <span>{description}</span>
      <p>
        <Link to={routes.homeArticle(locale, id)}>More ...</Link>
      </p>
    </StyledThumbnail>
  );
};

Thumbnail.propTypes = {
  article: PropTypes.object,
  locale: PropTypes.string.isRequired,
};

Thumbnail.defaultProps = {
  article: {
    title: 'News',
    urlToImage: '#',
    description: '',
    id: '',
  },
};

export default Thumbnail;
