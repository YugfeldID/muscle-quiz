const tseslint = require('typescript-eslint');
const eslint = require('@eslint/js');

const config =  tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
            },
        },
    },
    {
        ignores: ['*config.js'],
    },
    {
        rules: {
            '@typescript-eslint/no-var-requires': 'off',
        }
    }
);

module.exports = config;
