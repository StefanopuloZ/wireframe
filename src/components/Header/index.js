import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';

const Header = props => {
  // const { locale } = props;

  // let { path, url } = useRouteMatch();

  // console.log('path', path, 'url', url);

  const location = useLocation().pathname;
  const canChangeLocale = location.includes('article');
  console.log('location', location, canChangeLocale);

  return (
    <HeaderWrapper>
      <StyledContainer>Header</StyledContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  locale: PropTypes.string.isRequired,
};

Header.defaultProps = {};

const mapStateToProps = state => ({
  locale: state.ArticlesReducer.locale,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
