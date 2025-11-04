import type { LinterConfig } from '../types'
import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import globals from 'globals'

export function vue(): LinterConfig[] {
    return [
        ...vuePlugin.configs['flat/recommended'],
        {
            name: 'daopk/vue',
            files: ['**/*.vue'],
            languageOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                globals: globals.browser,
                parserOptions: {
                    parser: tsParser,
                },
            },
        },
    ]
}
