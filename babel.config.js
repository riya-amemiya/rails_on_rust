module.exports = function(api) {
    const validEnv = ['development', 'test', 'production']
    const currentEnv = api.env()
    const isDevelopmentEnv = api.env('development')
    const isProductionEnv = api.env('production')
    const isTestEnv = api.env('test')
    if (!validEnv.includes(currentEnv)) {
        throw new Error(
            'Please specify a valid `NODE_ENV` or ' +
            '`BABEL_ENV` environment variables. Valid values are "development", ' +
            '"test", and "production". Instead, received: ' +
            JSON.stringify(currentEnv) +
            '.'
        )
    }
    return {
        presets: [
            [
                "minify",
                {
                    "booleans": true,
                    "builtIns": true,
                    "consecutiveAdds": true,
                    "deadcode": true,
                    "evaluate": true,
                    "flipComparisons": true,
                    "guards": true,
                    "infinity": false,
                    "mangle": true,
                    "memberExpressions": true,
                    "mergeVars": true,
                    "numericLiterals": true,
                    "propertyLiterals": true,
                    "regexpConstructors": true,
                    "removeConsole": (isProductionEnv) ? true : false,
                    "removeDebugger": false,
                    "removeUndefined": true,
                    "replace": true,
                    "simplify": false,
                    "simplifyComparisons": true,
                    "typeConstructors": true,
                    "undefinedToVoid": true
                }
            ],
            isTestEnv && [
                '@babel/preset-env',
                {
                    "spec": true,
                    "modules": "commonjs",
                    "targets": {
                        "node": "current",
                        "esmodules": true
                    },
                    "shippedProposals": true
                },
                '@babel/preset-react'
            ],
            (isProductionEnv || isDevelopmentEnv) && [
                '@babel/preset-env',
                {
                    forceAllTransforms: true,
                    useBuiltIns: 'entry',
                    corejs: 3,
                    modules: false,
                    exclude: ['transform-typeof-symbol'],
                    loose: true
                }
            ],
            [
                '@babel/preset-react',
                {
                    development: isDevelopmentEnv || isTestEnv,
                    useBuiltIns: true
                }
            ],
            ['@babel/preset-typescript', { 'allExtensions': true, 'isTSX': true }]
        ].filter(Boolean),
        plugins: [
            'babel-plugin-macros',
            '@babel/plugin-syntax-dynamic-import',
            isTestEnv && 'babel-plugin-dynamic-import-node',
            '@babel/plugin-transform-destructuring', [
                '@babel/plugin-proposal-class-properties',
            ],
            [
                '@babel/plugin-proposal-object-rest-spread',
                {
                    useBuiltIns: true
                }
            ],
            [
                '@babel/plugin-transform-runtime',
                {
                    helpers: false,
                    regenerator: true,
                    corejs: false
                }
            ],
            [
                '@babel/plugin-transform-regenerator',
                {
                    async: false
                }
            ],
            [
                "@babel/plugin-transform-async-to-generator",
                {
                    "module": "bluebird",
                    "method": "coroutine"
                }
            ],
            [
                "@babel/plugin-transform-template-literals"
            ],
            [
                "@babel/plugin-proposal-optional-chaining"
            ],
            [
                "@babel/plugin-transform-object-super"
            ],
            [
                "@babel/plugin-transform-classes",
                {
                    "loose": true
                }
            ],
            [
                "@babel/plugin-proposal-logical-assignment-operators"
            ],
            [
                "transform-inline-environment-variables"
            ],
            [
                "@babel/plugin-proposal-nullish-coalescing-operator"
            ],
            [
                "@babel/plugin-transform-computed-properties"
            ],
            [
                "@babel/plugin-proposal-partial-application"
            ],
            isProductionEnv && [
                'babel-plugin-transform-react-remove-prop-types',
                {
                    removeImport: true
                }
            ]
        ].filter(Boolean)
    }
}