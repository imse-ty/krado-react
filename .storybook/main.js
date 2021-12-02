const path = require('path');

// Location of root node_modules
const modulesDir = path.join(__dirname, '../node_modules');

// To make Storybook work with Emotion 11
const emotion10Aliases = (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@emotion/core': path.join(modulesDir, '@emotion/react'),
      '@emotion/styled': path.join(modulesDir, '@emotion/styled'),
      '@emotion/styled-base': path.join(modulesDir, '@emotion/styled'),
      'emotion-theming': path.join(modulesDir, '@emotion/react')
    }
  }
});

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: emotion10Aliases,
  babel: async (options) => ({
    ...options,
    presets: [
      [
        '@babel/preset-react',
        {
          importSource: 'theme-ui',
          runtime: 'automatic',
          throwIfNamespace: false
        }
      ]
    ]
  })
};
