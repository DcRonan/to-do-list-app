module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
     process.env.NODE_ENV === 'production' ? require('@fullhuman/postcss-purgecss')({
      content: [
        './src/**/*.js',
        './dist/index.html',
      ],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    }) : null
  ]
};
