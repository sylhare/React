/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
    ignorePatterns: [
        'node_modules',
        'build',
        'coverage',
        '*.config.ts',
        'root.tsx',
        'entry.*',
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/no-named-as-default': 0,
        'import/namespace': 0,
        'react/jsx-key': 'error',
        'react/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always' }],
        'react-hooks/rules-of-hooks': 'warn', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'prefer-rest-params': 'warn',
        'no-multiple-empty-lines': ['error', {'max': 1}],
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false,
            'argsIgnorePattern': '^_',
        }],
    },
};
