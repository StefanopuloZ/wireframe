import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledArticlesCarousel,
  StyledArticlesCarouselWrapper,
  StyledArrow,
  StyledItemsWrapper,
  StyledCarouselThumbnail,
  StyledExpandCollapse,
  StyledCarouselWrapper,
} from './StyledArticlesCarousel';
import Thumbnail from '../Thumbnail';

const ArticlesCarousel = props => {
  const { articles, locale } = props;

  const [pxPosition, setpxPosition] = useState(0);
  const [carouselPosition, setCarouselPosition] = useState(0);

  const maxCarouselPosition = articles.length - 1;

  const handleArrowClick = direction => {
    let position = pxPosition;

    if (direction === 'right') {
      position -= 350;
      setCarouselPosition(carouselPosition - 1);
    } else if (direction === 'left') {
      position += 350;
      setCarouselPosition(carouselPosition + 1);
    }

    setpxPosition(position);
  };

  const articlesDisplay = articles.map(article => (
    <StyledCarouselThumbnail key={article.id}>
      <Thumbnail locale={locale} key={article.id} article={article} />
    </StyledCarouselThumbnail>
  ));

  return (
    <StyledArticlesCarouselWrapper>
      <h2>Entertainment:</h2>
      <StyledExpandCollapse>Expand/Colapse</StyledExpandCollapse>
      <StyledArticlesCarousel>
        <StyledArrow
          onClick={() => {
            if (carouselPosition === 0) {
              return;
            } else {
              handleArrowClick('left');
            }
          }}
          disabled={carouselPosition === 0}
        >
          Left
        </StyledArrow>
        <StyledCarouselWrapper>
          <StyledItemsWrapper pxPosition={pxPosition}>
            {articlesDisplay}
          </StyledItemsWrapper>
        </StyledCarouselWrapper>
        <StyledArrow
          onClick={() => {
            if (carouselPosition === maxCarouselPosition) {
              return;
            } else {
              handleArrowClick('right');
            }
          }}
          disabled={carouselPosition === maxCarouselPosition}
        >
          Right
        </StyledArrow>
      </StyledArticlesCarousel>
    </StyledArticlesCarouselWrapper>
  );
};

ArticlesCarousel.propTypes = {
  articles: PropTypes.array,
  locale: PropTypes.string.isRequired,
};

ArticlesCarousel.defaultProps = {
  articles: [],
};

export default ArticlesCarousel;
