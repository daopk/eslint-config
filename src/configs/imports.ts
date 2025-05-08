import type { LinterConfig } from '../types'

import importX from 'eslint-plugin-import-x'
import unusedImports from 'eslint-plugin-unused-imports'

export function imports(): LinterConfig {
    return {
        name: 'daopk/imports',
        plugins: {
            'import': importX,
            'unused-imports': unusedImports,
        },
        rules: {
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
            'import/first': 'error',
            'import/no-duplicates': 'error',
            'import/no-mutable-exports': 'error',
            'import/no-named-default': 'error',
            'import/no-self-import': 'error',
            'import/no-webpack-loader-syntax': 'error',

            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    vars: 'all',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    }
}
