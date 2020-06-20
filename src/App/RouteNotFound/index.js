import React from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LOCALE } from '../../enums';
import { setLocaleAction } from '../../actions/AppActions';

const RouteNotFound = props => {
  const dispatch = useDispatch();

  const locale = useSelector(state => state.AppReducer.locale);

  const location = useLocation().pathname;

  const providedLocale = location.slice(1, 3);

  let redirect = false;

  /* If valid locale provided different from current locale - update */
  if (
    Object.keys(LOCALE).includes(providedLocale) &&
    providedLocale !== locale
  ) {
    dispatch(setLocaleAction(providedLocale));
    redirect = true;
  }

  console.log('not found', redirect);

  return !redirect ? (
    <>
      <h1>Page not found</h1>
      {console.log('page not found')}
    </>
  ) : (
    <Redirect
      to={{
        pathname: location,
      }}
    />
  );
};

export default RouteNotFound;
