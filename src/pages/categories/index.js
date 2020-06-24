import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCategoryArticlesAction } from '../../actions/ArticlesActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyledCategories,
  StyledCategoriesWrapper,
  StyledCategoryCarousel,
} from './StyledCategories';
import { LOCALE } from '../../enums/Locale';
import ArticlesCarousel from '../../components/ArticlesCarousel';
import { StyledContainer } from '../../components/StyledContainer';
import Category from '../../components/Category';
import routes from '../../App/routes';
import WithLoader from '../../hocs/withLoader';

const Categories = props => {
  const dispatch = useDispatch();

  const locale = useSelector(state => state.AppReducer.locale);
  const categories = useSelector(state => state.ArticlesReducer.categories);

  const { id, category } = useParams();

  useEffect(() => {
    for (const categoryName in categories) {
      dispatch(fetchCategoryArticlesAction(locale, categoryName));
    }
  }, []);

  const buildDIsplayCategories = categories => {
    const categoriesArray = [];
    for (const categoryName in categories) {
      categoriesArray.push(
        <StyledCategoryCarousel key={categoryName}>
          <ArticlesCarousel
            categoryLink={routes.categoriesCategory(locale, categoryName)}
            categoryName={categoryName}
            articles={categories[categoryName]}
            locale={locale}
            baseRoute={routes.categoriesCategory(locale, categoryName)}
          />
        </StyledCategoryCarousel>
      );
    }

    return categoriesArray;
  };

  const displayCategories = buildDIsplayCategories(categories);

  return (
    <StyledContainer>
      {category ? (
        <Category
          locale={locale}
          category={category}
          articles={categories[category]}
          articleId={id}
        />
      ) : (
        <StyledCategories>
          <h1>
            Top 5 news by category from
            <span style={{ textTransform: 'uppercase' }}>
              {LOCALE[locale]}:
            </span>
          </h1>
          <StyledCategoriesWrapper>
            <WithLoader>
              <>{displayCategories}</>
            </WithLoader>
          </StyledCategoriesWrapper>
        </StyledCategories>
      )}
    </StyledContainer>
  );
};

export default Categories;
