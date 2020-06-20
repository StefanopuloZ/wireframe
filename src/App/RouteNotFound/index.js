import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOCALE } from '../../enums';
import { setLocaleAction } from '../../actions/AppActions';

const RouteNotFoundComponent = props => {
  const { setLocaleAction, locale } = props;

  const location = useLocation().pathname;

  const providedLocale = location.slice(1, 3);

  let redirect = false;

  /* If valid locale provided different from current locale - update */
  if (Object.keys(LOCALE).includes(providedLocale) && providedLocale !== locale) {
    setTimeout(() => {
      setLocaleAction(providedLocale);
    });
    redirect = true;
  }

  return !redirect ? (
    <h1>Page not found</h1>
  ) : (
    <Redirect
      to={{
        pathname: location,
      }}
    />
  );
};

const mapStateToProps = state => ({
  locale: state.AppReducer.locale,
});

const mapDispatchToProps = dispatch => ({
  setLocaleAction: locale => dispatch(setLocaleAction(locale)),
});

RouteNotFoundComponent.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocaleAction: PropTypes.func.isRequired,
};

RouteNotFoundComponent.defaultProps = {};

const RouteNotFound = connect(
  mapStateToProps,
  mapDispatchToProps
)(RouteNotFoundComponent);

export default RouteNotFound;
