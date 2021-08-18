// module.exports = {
//     plugins: [
//         require('tailwindcss')("./app/javascript/stylesheets/tailwind.config.js"),
//         require('postcss-import'),
//         require('postcss-flexbugs-fixes'),
//         require('postcss-preset-env')({
//             autoprefixer: {
//                 flexbox: 'no-2009'
//             },
//             stage: 3
//         })
//     ]
// }

// let environment = {
//     plugins: [
//         require('tailwindcss')("./app/javascript/stylesheets/tailwind.config.js"),
//         require('autoprefixer'),
//         require('postcss-import'),
//         require('postcss-flexbugs-fixes'),
//         require('postcss-preset-env')({
//             autoprefixer: {
//                 flexbox: 'no-2009'
//             },
//             stage: 3
//         }),
//     ]
// }

// // Only run PurgeCSS in production (you can also add staging here)
// if (process.env.RAILS_ENV === "production") {
//     environment.plugins.push(
//         require('@fullhuman/postcss-purgecss')({
//             content: [
//                 './app/**/*.html.erb',
//                 './app/helpers/**/*.rb',
//                 './app/javascript/**/*.js',
//                 './app/javascript/**/*.jsx',
//                 './app/javascript/**/*.ts',
//                 './app/javascript/**/*.tsx',
//                 './app/javascript/**/*.vue',

//             ],
//             defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
//         })
//     )
// }

// module.exports = environment
const environment = ctx => ({
    plugins: [
        require('tailwindcss')("./app/javascript/stylesheets/tailwind.config.js"),
        require("postcss-import"),
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
            autoprefixer: {
                flexbox: "no-2009"
            },
            stage: 3
        }),
        purgeCss(ctx)
    ]
});

const purgeCss = ({ file }) => {
    return require("@fullhuman/postcss-purgecss")({
        content: htmlFilePatterns(file.basename),
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    });
};

const htmlFilePatterns = filename => {
    switch (filename) {
        case "main.scss":
            return [
                "./app/views/main/*.erb",
            ];
        default:
            return [
                "./app/**/*.html.erb",
                "./config/initializers/simple_form_bootstrap.rb",
                "./app/helpers/**/*.rb",
                "./app/javascript/**/*.js"
            ];
    }
};

module.exports = ctx => environment(ctx);