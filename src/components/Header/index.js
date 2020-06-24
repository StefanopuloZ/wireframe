import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import {
  StyledLocaleBox,
  StyledNav,
  StyledHeader,
  StyledLocaleButton,
  StyledLinkItem,
  StyledHumburgerIcon,
} from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import { LOCALE } from '../../enums';
import Icon from '../Icon';
import icons from '../Icon/icons';

const Header = props => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

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

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <StyledContainer style={{ paddingBottom: 0, paddingTop: 0 }}>
      <StyledHeader>
        <StyledHumburgerIcon
          onClick={handleHamburgerClick}
          isOpen={isHamburgerOpen}
        >
          <Icon icon={isHamburgerOpen ? icons.cross : icons.menu} />
        </StyledHumburgerIcon>
        <StyledNav isOpen={isHamburgerOpen}>
          <Link to={routes.home(locale)}>
            <StyledLinkItem
              selected={
                location.includes(routes.home(locale)) &&
                !location.includes(routes.categories(locale)) &&
                !location.includes(routes.search(locale))
              }
            >
              Top News
            </StyledLinkItem>
          </Link>
          <Link to={routes.categories(locale)}>
            <StyledLinkItem
              selected={location.includes(routes.categories(locale))}
            >
              Categories
            </StyledLinkItem>
          </Link>
          <Link to={routes.search(locale)}>
            <StyledLinkItem selected={location.includes(routes.search(locale))}>
              Search
            </StyledLinkItem>
          </Link>
        </StyledNav>
        <StyledLocaleBox>
          <StyledLocaleButton
            style={{ borderRight: '1px solid gray' }}
            onClick={() => changeLocale(LOCALE.gb)}
            selected={LOCALE.gb === locale}
            disabled={!canChangeLocale}
          >
            {LOCALE.gb}
          </StyledLocaleButton>
          <StyledLocaleButton
            selected={LOCALE.us === locale}
            onClick={() => changeLocale(LOCALE.us)}
            disabled={!canChangeLocale}
          >
            {LOCALE.us}
          </StyledLocaleButton>
        </StyledLocaleBox>
      </StyledHeader>
    </StyledContainer>
  );
};

export default Header;
