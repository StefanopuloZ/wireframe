import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { HeaderWrapper } from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import { LOCALE } from '../../enums';

const Header = props => {
  const { locale } = props;

  const location = useLocation().pathname;
  const history = useHistory();

  const changeLocale = newLocale => {
    const newRoute = location.replace(`/${locale}`, `/${newLocale}`);
    history.push(newRoute);
  };

  // let { path, url } = useRouteMatch();

  // console.log('path', path, 'url', url);

  const canChangeLocale = location.includes('article');
  // console.log('location', location, canChangeLocale);

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
};

Header.defaultProps = {};

const mapStateToProps = state => ({
  locale: state.AppReducer.locale,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
