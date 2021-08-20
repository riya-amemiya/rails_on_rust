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
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { 'max': '1023px' },
            // => @media (max-width: 1023px) { ... }

            'md': { 'max': '767px' },
            // => @media (max-width: 767px) { ... }

            'sm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }
        }
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