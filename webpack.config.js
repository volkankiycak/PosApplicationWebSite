module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
          exclude: /node_modules/, // node_modules klasörünü hariç tutar
        },
      ],
    },
  };

  