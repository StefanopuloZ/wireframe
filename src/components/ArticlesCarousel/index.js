import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledArticlesCarousel,
  StyledArticlesCarouselWrapper,
  StyledArrow,
  StyledItemsWrapper,
  StyledCarouselThumbnail,
  StyledExpandCollapse,
} from './StyledArticlesCarousel';
import Thumbnail from '../Thumbnail';

const ArticlesCarousel = props => {
  const { articles, locale } = props;

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
        <StyledArrow>Left</StyledArrow>
        <StyledItemsWrapper>{articlesDisplay}</StyledItemsWrapper>
        <StyledArrow>Right</StyledArrow>
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
