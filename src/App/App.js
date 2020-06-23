import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import RouteNotFound from './RouteNotFound';
import { GlobalStyle } from './GlobalStyle';
import theme from '../theme';
import routes from './routes';
import PageWrapper from './PageWrapper';
import Home from '../pages/home';
import Categories from '../pages/categories';
import Search from '../pages/search';

const SetLocale = () => {
  const history = useHistory();

  const locale = useSelector(state => state.AppReducer.locale);

  history.push(routes.home(locale));
  return <></>;
};

const App = props => {
  const locale = useSelector(state => state.AppReducer.locale);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageWrapper>
          <Switch>
            <Route exact path={`/`} component={SetLocale} />
            <Route exact path={routes.home(locale)} component={Home} />
            <Route
              exact
              path={routes.homeArticle(locale)}
              component={Home}
            />
            <Route
              exact
              path={routes.categories(locale)}
              component={Categories}
            />
            <Route
              exact
              path={routes.categoriesCategory(locale)}
              component={Categories}
            />
            <Route
              exact
              path={routes.categoriesArticle(locale)}
              component={Categories}
            />
            <Route exact path={routes.search(locale)} component={Search} />
            <Route exact path={routes.searchArticle(locale)} component={Search} />
            <Route component={RouteNotFound} />
          </Switch>
        </PageWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default App;
