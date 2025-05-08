import type { LinterConfig } from '../types'
import antfuPlugin from 'eslint-plugin-antfu'

export function antfu(): LinterConfig {
    return {
        name: 'daopk/antfu',
        plugins: {
            antfu: antfuPlugin,
        },
        rules: {
            'antfu/consistent-chaining': 'error',
            'antfu/consistent-list-newline': 'error',
            'antfu/import-dedupe': 'error',
        },
    }
}
