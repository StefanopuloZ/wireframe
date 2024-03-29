export const colors = {
  black: '#252525',
  white: '#fff',
  linkColor: '#0051B5',
  teal: '#5EEDE8',
  gray: '#939393',
};

export const boxShadow = {
  standard: '2px 1px 5px 2px rgba(0, 0, 0, 0.4)',
};

export const borderRadius = {
  standard: '6px',
  large: '20px',
};

const breakpoints = ['600px', '960px', '1280px'];

breakpoints.sm = breakpoints[0];

export const media = {
  small: `(min-width: ${breakpoints[0]})`,
  medium: `(min-width: ${breakpoints[1]})`,
  large: `(min-width: ${breakpoints[2]})`,
};

export default {
  colors,
  breakpoints,
  boxShadow,
};
