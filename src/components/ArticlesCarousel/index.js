import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  StyledArticlesCarousel,
  StyledArticlesCarouselWrapper,
  StyledArrow,
  StyledItemsWrapper,
  StyledCarouselThumbnail,
  StyledExpandCollapse,
  StyledCarouselWrapper,
  StyledTitleWrapper,
  StyledCategoryLink,
} from './StyledArticlesCarousel';
import Thumbnail from '../Thumbnail';
import Icon from '../Icon';
import icons from '../Icon/icons';

const ArticlesCarousel = props => {
  const { articles, locale, categoryName, categoryLink, baseRoute } = props;

  const topFiveArticles = articles.length > 5 ? articles.slice(0, 5) : articles;

  const maxCarouselPosition = topFiveArticles.length - 1;
  const itemWidth = 350;

  const [pxPosition, setPxPosition] = useState(0);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleArrowClick = direction => {
    let position = pxPosition;

    if (direction === 'right') {
      position -= itemWidth;
      setCarouselPosition(carouselPosition + 1);
    } else if (direction === 'left') {
      position += itemWidth;
      setCarouselPosition(carouselPosition - 1);
    }

    setPxPosition(position);
  };

  const handleExpandClick = () => {
    setCarouselPosition(0);
    setPxPosition(0);
    setIsExpanded(!isExpanded);
  };

  const articlesDisplay = topFiveArticles.map(article => (
    <StyledCarouselThumbnail
      key={article.id}
      minWidth={isExpanded ? 0 : itemWidth}
    >
      <Thumbnail
        locale={locale}
        key={article.id}
        article={article}
        baseRoute={baseRoute}
      />
    </StyledCarouselThumbnail>
  ));

  return (
    <StyledArticlesCarouselWrapper>
      <StyledTitleWrapper>
        <StyledCategoryLink>
          <Link to={categoryLink}>{categoryName}:</Link>
        </StyledCategoryLink>
        <StyledExpandCollapse expanded={isExpanded} onClick={handleExpandClick}>
          &lt;&lt;
        </StyledExpandCollapse>
      </StyledTitleWrapper>
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
          left={true}
        >
          <Icon icon={icons.arrowDown} disabled={carouselPosition === 0} />
        </StyledArrow>
        <StyledCarouselWrapper expanded={isExpanded}>
          <StyledItemsWrapper pxPosition={pxPosition} expanded={isExpanded}>
            {articlesDisplay}
          </StyledItemsWrapper>
        </StyledCarouselWrapper>
        <StyledArrow
          onClick={() => {
            if (carouselPosition >= maxCarouselPosition) {
              return;
            } else {
              handleArrowClick('right');
            }
          }}
          disabled={carouselPosition >= maxCarouselPosition}
          hidden={isExpanded}
        >
          <Icon icon={icons.arrowDown} disabled={carouselPosition >= maxCarouselPosition} />
        </StyledArrow>
      </StyledArticlesCarousel>
    </StyledArticlesCarouselWrapper>
  );
};

ArticlesCarousel.propTypes = {
  articles: PropTypes.array,
  locale: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryLink: PropTypes.string.isRequired,
  baseRoute: PropTypes.string.isRequired,
};

ArticlesCarousel.defaultProps = {
  articles: [],
};

export default ArticlesCarousel;
