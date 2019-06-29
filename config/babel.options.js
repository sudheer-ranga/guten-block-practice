module.exports = {
    presets: [['@babel/preset-env', { useBuiltIns: 'entry' }]],
    plugins: [
      'react-hot-loader/babel',
      'babel-plugin-macros',
      'babel-plugin-syntax-dynamic-import',
      [
        'babel-plugin-transform-object-rest-spread',
        { useBuiltIns: true },
      ],
      [
        'babel-plugin-transform-react-jsx',
        {
          pragma: 'wp.element.createElement',
        },
      ],
    ],
  };
  