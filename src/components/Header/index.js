import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { HeaderWrapper } from './styledHeader';
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
    <HeaderWrapper>
      <StyledContainer>
        <div>
          <p>
            <Link to={routes.home(locale)}>Top News</Link>
          </p>
          <p>
            <Link to={routes.categories(locale)}>Categories</Link>
          </p>
          <p>
            <Link to={routes.search(locale)}>Search</Link>
          </p>
        </div>
        <div
          style={{
            color: `${canChangeLocale ? 'black' : 'red'}`,
            cursor: 'pointer',
          }}
        >
          <div onClick={() => changeLocale(LOCALE.gb)}>GB</div>
          <div onClick={() => changeLocale(LOCALE.us)}>US</div>
        </div>
      </StyledContainer>
    </HeaderWrapper>
  );
};

export default Header;
