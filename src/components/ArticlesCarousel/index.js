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

  const maxCarouselPosition = articles.length - 1;
  const itemWidth = 350;

  const [pxPosition, setPxPosition] = useState(0);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleArrowClick = direction => {
    let position = pxPosition;

    if (direction === 'right') {
      position -= itemWidth;
      setCarouselPosition(carouselPosition - 1);
    } else if (direction === 'left') {
      position += itemWidth;
      setCarouselPosition(carouselPosition + 1);
    }

    setPxPosition(position);
  };

  const handleExpandClick = () => {
    setCarouselPosition(0);
    setPxPosition(0);
    setIsExpanded(!isExpanded);
  };

  console.log('isExpanded', isExpanded);

  const articlesDisplay = articles.map(article => (
    <StyledCarouselThumbnail
      key={article.id}
      minWidth={isExpanded ? 0 : itemWidth}
    >
      <Thumbnail locale={locale} key={article.id} article={article} />
    </StyledCarouselThumbnail>
  ));

  return (
    <StyledArticlesCarouselWrapper>
      <h2>Entertainment:</h2>
      <StyledExpandCollapse onClick={handleExpandClick}>
        Expand/Colapse
      </StyledExpandCollapse>
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
          hidden={isExpanded}
        >
          &lt;
        </StyledArrow>
        <StyledCarouselWrapper expanded={isExpanded}>
          <StyledItemsWrapper pxPosition={pxPosition} expanded={isExpanded}>
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
          hidden={isExpanded}
        >
          &gt;
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
