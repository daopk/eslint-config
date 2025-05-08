import type { LinterConfig } from '../types'

export function builtin(): LinterConfig {
    return {
        name: 'daopk/eslint',
        rules: {
            'eqeqeq': 'error',
            'no-cond-assign': ['error', 'always'],
            'no-extra-boolean-cast': 'error',
            'no-regex-spaces': 'error',
            'no-unused-labels': 'error',
            'no-unused-vars': 'off',

            'object-curly-newline': 'off',
            'yoda': ['error', 'never'],
        },
    }
}
