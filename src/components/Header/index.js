import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useHistory, useParams } from 'react-router-dom';
import {
  StyledLocaleBox,
  StyledNav,
  StyledHeader,
  StyledLocaleButton,
  StyledLinkItem,
} from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import { LOCALE } from '../../enums';

const Header = props => {
  const locale = useSelector(state => state.AppReducer.locale);

  const location = useLocation().pathname;
  const history = useHistory();
  const params = useParams();

  const canChangeLocale = !location.includes('article');

  const changeLocale = newLocale => {
    if (canChangeLocale) {
      const newRoute = location.replace(`/${locale}`, `/${newLocale}`);
      history.push(newRoute);
    }
  };

  console.log('params', params, 'location', location);

  return (
    <StyledContainer style={{ paddingBottom: 0, paddingTop: 0 }}>
      <StyledHeader>
        <StyledNav>
          <Link to={routes.home(locale)}>
            <StyledLinkItem selected={location === routes.home(locale)}>
              Top News
            </StyledLinkItem>
          </Link>
          <Link to={routes.categories(locale)}>
            <StyledLinkItem selected={location === routes.categories(locale)}>
              Categories
            </StyledLinkItem>
          </Link>
          <Link to={routes.search(locale)}>
            <StyledLinkItem selected={location === routes.search(locale)}>
              Search
            </StyledLinkItem>
          </Link>
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
