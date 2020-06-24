import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  StyledThumbnail,
  StyledThumbnailWrapper,
  StyledThumbImage,
  StyledMoreLink,
} from './styledThumbnail';

const Thumbnail = props => {
  const { article, baseRoute } = props;

  const { urlToImage, description, title, id } = article;

  const Wrapper = StyledThumbnailWrapper;

  return (
    <Wrapper>
      <StyledThumbnail>
        <h3>{title}</h3>
        <StyledThumbImage>
          <img src={urlToImage} alt={title} />
        </StyledThumbImage>
        <span>{description}</span>
        <StyledMoreLink>
          <Link to={`${baseRoute}/article/${id}`}>More &gt;&gt;&gt;</Link>
        </StyledMoreLink>
      </StyledThumbnail>
    </Wrapper>
  );
};

Thumbnail.propTypes = {
  article: PropTypes.object,
  baseRoute: PropTypes.string.isRequired,
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
