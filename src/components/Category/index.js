import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchTopArticlesAction } from '../../actions/ArticlesActions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledCategory } from './StyledCategory';
import { LOCALE_COUNTRY_NAMES } from '../../enums/Locale';
import ArticlesThumbnails from '../../components/ArticlesThumbnails';
import Article from '../../components/Article';
import { articleFunctions } from '../../logic-functions';
import routes from '../../App/routes';

const Category = props => {
  const dispatch = useDispatch();

  const locale = useSelector(state => state.AppReducer.locale);
  const articles = useSelector(state => state.ArticlesReducer.topArticles);

  const { id } = useParams();

  let article = {};

  // if (id && articles.length > 0) {
  //   article = articleFunctions.getArticle(articles, id);
  // }

  return (
    <StyledCategory>
      category
      {/* {id ? (
        <Article article={article} backLink={routes.home(locale)} />
      ) : (
        <StyledHome>
          <h1>Top news from {LOCALE_COUNTRY_NAMES[locale]}</h1>
          <ArticlesThumbnails
            baseRoute={routes.home(locale)}
            articles={articles}
          />
        </StyledHome>
      )} */}
    </StyledCategory>
  );
};

export default Category;
