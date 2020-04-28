module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
      },
    }],
  ],
  plugins: [
    '@babel-plugin-dynamic-import-node',
    '@babel/plugin-proposal-export-default-from',
  ],
};
