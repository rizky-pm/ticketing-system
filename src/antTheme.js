const colors = {
  primary: '#2B59C3',
  light: '#FFFBFC',
  dark: '#010400',
  darkGray: '#5D5E60',
  lightGray: '#8D8D92',
};

const styles = {
  '@primary-color': colors.primary,
  '@black': colors.dark,
  '@white': colors.light,
  '@border-color-base': colors.lightGray,

  // * Disabled states
  '@disabled-bg': `${colors.primary}26`,
};

module.exports = styles;
