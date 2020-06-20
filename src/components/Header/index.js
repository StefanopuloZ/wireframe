import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { HeaderWrapper } from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import { LOCALE } from '../../enums';
import { setLocaleAction } from '../../actions/AppActions';

const Header = props => {
  const { locale, setLocaleAction } = props;

  const location = useLocation().pathname;

  const changeLocale = newLocale => {
    // const newLocale = location.slice(1, 3);
  };

  let { path, url } = useRouteMatch();

  console.log('path', path, 'url', url);

  const canChangeLocale = location.includes('article');
  console.log('location', location, canChangeLocale);

  return (
    <HeaderWrapper>
      <StyledContainer>
        <div>
          Routing: <Link to={routes.home(locale)}>News</Link>
        </div>
        <div>
          <div onClick={() => changeLocale(LOCALE.gb)}>GB</div>
          <div onClick={() => changeLocale(LOCALE.us)}>US</div>
        </div>
      </StyledContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocaleAction: PropTypes.func.isRequired,
};

Header.defaultProps = {};

const mapStateToProps = state => ({
  locale: state.ArticlesReducer.locale,
});

const mapDispatchToProps = dispatch => ({
  setLocaleAction: locale => dispatch(setLocaleAction(locale)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
