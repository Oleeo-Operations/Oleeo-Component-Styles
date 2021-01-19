module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-sorting': {
      order: [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'at-rules',
        'rules'
      ],

      'properties-order': [
        'content',
        'display',
        'position',
        'z-index',
        'top',
        'right',
        'bottom',
        'left',
        'float',
        'margin',
        'padding',
        'width',
        'height',
        'font-family',
        'font-size',
        'color',
        'alphabetical'
      ],

      'unspecified-properties-position': 'bottomAlphabetical'
    },
    autoprefixer: {}
  }
};
