import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  StyledLocaleBox,
  StyledNav,
  StyledHeader,
  StyledLocaleButton,
} from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import { LOCALE } from '../../enums';

const Header = props => {
  const locale = useSelector(state => state.AppReducer.locale);

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
    <StyledContainer style={{ paddingBottom: 0, paddingTop: 0 }}>
      <StyledHeader>
        <StyledNav>
          <p>
            <Link to={routes.home(locale)}>Top News</Link>
          </p>
          <p>
            <Link to={routes.categories(locale)}>Categories</Link>
          </p>
          <p>
            <Link to={routes.search(locale)}>Search</Link>
          </p>
        </StyledNav>
        <StyledLocaleBox>
          <StyledLocaleButton
            style={{ borderRight: '1px solid gray' }}
            onClick={() => changeLocale(LOCALE.gb)}
            selected={LOCALE.gb === locale}
          >
            {LOCALE.gb}
          </StyledLocaleButton>
          <StyledLocaleButton
            selected={LOCALE.us === locale}
            onClick={() => changeLocale(LOCALE.us)}
          >
            {LOCALE.us}
          </StyledLocaleButton>
        </StyledLocaleBox>
      </StyledHeader>
    </StyledContainer>
  );
};

export default Header;
