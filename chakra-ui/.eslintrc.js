module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
};
