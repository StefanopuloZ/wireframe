import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageWrapper from './PageWrapper';
import Home from '../pages/home';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <PageWrapper>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route>
                <h1>Page not found</h1>
              </Route>
            </Switch>
          </PageWrapper>
        </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
