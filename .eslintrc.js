module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
  },
};
