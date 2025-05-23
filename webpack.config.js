module.exports = {
    resolve: {
      modules: ['node_modules', 'src', '.'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
  };  

  