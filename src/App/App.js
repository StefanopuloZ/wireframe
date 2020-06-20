import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import PageWrapper from './PageWrapper';
import Home from '../pages/home';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import routes from './routes';

const locale = 'en';
const query = 'trump';

const SetLocale = () => {
  const history = useHistory();
  history.push(routes.home(locale));
  return <div></div>;
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <PageWrapper>
          <Switch>
            <Route exact path={`/`} component={SetLocale} />
            <Route exact path={routes.home(locale)} component={Home} />
            <Route exact path={routes.homeArticle(locale)} component={Home} />
            {/* <Route exact path={routes.categories(locale)} component={Categories} />
            <Route exact path={routes.search(locale, query)} component={Search} /> */}
            <Route>
              <h1>Page not found</h1>
            </Route>
          </Switch>
        </PageWrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
