import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import PageWrapper from './PageWrapper';
import Home from '../pages/home';
import RouteNotFound from './RouteNotFound';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import theme from '../theme';
import routes from './routes';
import { setLocaleAction } from '../actions/AppActions';

const AppComponent = props => {
  const { locale } = props;

  const SetLocale = () => {
    const history = useHistory();
    history.push(routes.home(locale));
    return <></>;
  };

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
            <Route component={RouteNotFound} />
          </Switch>
        </PageWrapper>
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = state => ({
  locale: state.AppReducer.locale,
});

const mapDispatchToProps = dispatch => ({
  setLocaleAction: locale => dispatch(setLocaleAction(locale)),
});

AppComponent.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocaleAction: PropTypes.func.isRequired,
};

AppComponent.defaultProps = {};

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
