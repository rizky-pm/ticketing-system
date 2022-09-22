const colors = {
  primary: '#2B59C3',
  light: '#FFFBFC',
  dark: '#21262b',
  darkGray: '#353d44',
  gray: '#424c55',
  lightGray: '#687077',
};

const styles = {
  '@primary-color': colors.primary,
  '@black': colors.dark,
  '@white': colors.light,
  '@border-color-base': colors.gray,

  // * Disabled states
  '@disabled-bg': `${colors.primary}26`,
};

module.exports = styles;
