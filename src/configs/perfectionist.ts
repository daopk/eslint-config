import type { LinterConfig } from '../types'
import perfectionistPlugin from 'eslint-plugin-perfectionist'

export function perfectionist(): LinterConfig {
    return {
        name: 'daopk/perfectionist',
        plugins: {
            perfectionist: perfectionistPlugin,
        },
        rules: {
            'perfectionist/sort-exports': ['error', { order: 'asc', type: 'natural' }],
            'perfectionist/sort-imports': ['error', {
                groups: [
                    'type',
                    ['parent-type', 'sibling-type', 'index-type', 'internal-type'],

                    'builtin',
                    'external',
                    'internal',
                    ['parent', 'sibling', 'index'],
                    'side-effect',
                    'object',
                    'unknown',
                ],
                newlinesBetween: 'ignore',
                order: 'asc',
                type: 'natural',
            }],
            'perfectionist/sort-named-exports': ['error', { order: 'asc', type: 'natural' }],
            'perfectionist/sort-named-imports': ['error', { order: 'asc', type: 'natural' }],
        },
    }
}
