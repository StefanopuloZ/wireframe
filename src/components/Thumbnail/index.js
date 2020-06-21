import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledThumbnail, StyledThumbnailWrapper, StyledThumbImage, StyledMoreLink } from './styledThumbnail';
import routes from '../../App/routes';

const Thumbnail = props => {
  const { article, locale } = props;

  const { urlToImage, description, title, id } = article;

  return (
    <StyledThumbnailWrapper>
      <StyledThumbnail>
        <h3>{title}</h3>
        <StyledThumbImage>
            <img src={urlToImage} alt={title} />
        </StyledThumbImage>
        <span>{description}</span>
        <StyledMoreLink>
          <Link to={routes.homeArticle(locale, id)}>More &gt;&gt;&gt;</Link>
        </StyledMoreLink>
      </StyledThumbnail>
    </StyledThumbnailWrapper>
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
