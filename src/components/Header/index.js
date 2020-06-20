import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { HeaderWrapper } from './styledHeader';
import { StyledContainer } from '../StyledContainer';
import routes from '../../App/routes';
import { LOCALE } from '../../enums';
import { setLocaleAction } from '../../actions/AppActions';

const Header = props => {
  const dispatch = useDispatch();

  const locale = useSelector(state => state.AppReducer.locale);

  const location = useLocation().pathname;
  const history = useHistory();

  const canChangeLocale = !location.includes('article');

  const changeLocale = newLocale => {
    if (canChangeLocale) {
      const newRoute = location.replace(`/${locale}`, `/${newLocale}`);
      setTimeout(() => {
        history.push(newRoute);
      });
      dispatch(setLocaleAction(newLocale));
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

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
