import type { LinterConfig } from '../types'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export function typescript(): LinterConfig {
    return {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 'latest',
            parser: tsParser,
            sourceType: 'module',
        },
        name: 'daopk/typescript',
        plugins: {
            typescript: typescriptPlugin,
        },
        rules: {
            'typescript/consistent-type-imports': ['error', {
                disallowTypeAnnotations: false,
                fixStyle: 'separate-type-imports',
                prefer: 'type-imports',
            }],

            'typescript/no-unused-vars': 'off',
        },
    }
}
