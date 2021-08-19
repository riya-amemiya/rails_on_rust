module.exports = {
    purge: {
        content: [
            './app/**/*.html.erb',
            './app/helpers/**/*.rb',
            './app/javascript/**/*.js',
            './app/javascript/**/*.jsx',
            './app/javascript/**/*.ts',
            './app/javascript/**/*.tsx',
            './app/javascript/**/*.vue',

        ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'), //追加
        require('@tailwindcss/typography'), //追加
        require('@tailwindcss/aspect-ratio'),
    ],
    fontFamily: {
        sans: [
            'Inter var', //追加
            'ui-sans-serif',
            'system-ui',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
        ],
    }
}