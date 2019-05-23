module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
  },
  env: {
    browser: true,
    node: true,
  },
};
