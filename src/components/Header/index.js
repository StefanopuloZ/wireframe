import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { HeaderWrapper } from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import { LOCALE } from '../../enums';

const Header = props => {
  const { locale } = props;

  const location = useLocation().pathname;
  const history = useHistory();

  const canChangeLocale = !location.includes('article');

  const changeLocale = newLocale => {
    if (canChangeLocale) {
      const newRoute = location.replace(`/${locale}`, `/${newLocale}`);
      history.push(newRoute);
    }
  };

  return (
    <HeaderWrapper>
      <StyledContainer>
        <div>
          <p><Link to={routes.home(locale)}>Top News</Link></p>
          <p><Link to={routes.categories(locale)}>Categories</Link></p>
          <p><Link to={routes.search(locale)}>Search</Link></p>
        </div>
        <div style={{color: `${canChangeLocale ? 'black' : 'red'}`, cursor: 'pointer'}}>
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
