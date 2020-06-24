import React from 'react';
import IcoMoon from 'react-icomoon';
import PropTypes from 'prop-types';
import { StyledIcoMoon } from './styledIcoMoon';
import theme from '../../theme';

const iconSet = require('./selection.json');

const Icon = props => {
  const { color, hoverc } = props;

  return (
    <StyledIcoMoon hoverColor={hoverc}>
      <IcoMoon iconSet={iconSet} color={color} {...props} />
    </StyledIcoMoon>
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  hoverc: PropTypes.string,
};

Icon.defaultProps = {
  color: theme.colors.gray,
  hoverc: theme.colors.teal,
};

export default Icon;
