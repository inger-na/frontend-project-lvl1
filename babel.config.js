module.exports = {
  presets: [
    ['@babel/env', {
      targets: {
        node: 'current',
        firefox: '60',
        chrome: '67',
        safari: '11.1'
      }
    }]
  ],
  plugins: [
    '@babel-plugin-dynamic-import-node',
    '@babel/plugin-proposal-export-default-from'
  ]
};
