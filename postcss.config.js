const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')
module.exports = {
    plugins: [
        require('tailwindcss')("./app/javascript/stylesheets/tailwind.config.js"),
        require('postcss-import'),
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
            autoprefixer: {
                flexbox: 'no-2009'
            },
            stage: 3
        }),
        cssnano({
            preset: "default"
        }),
        purgecss({
            content: [
                './app/**/*.html.erb',
                './app/helpers/**/*.rb',
                './app/javascript/**/*.js',
                './app/javascript/**/*.jsx',
                './app/javascript/**/*.ts',
                './app/javascript/**/*.tsx',
                './app/javascript/**/*.vue',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ]
}