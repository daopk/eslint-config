import type { Linter } from 'eslint'
import type { RuleOptions } from './typegen'

import stylistic from '@stylistic/eslint-plugin'
import typescript from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import gitignore from 'eslint-config-flat-gitignore'
import antfu from 'eslint-plugin-antfu'
import importX from 'eslint-plugin-import-x'
import node from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import unusedImports from 'eslint-plugin-unused-imports'

export interface Options {
    ignores?: string[]
    rules?: RuleOptions
}

export type LinterConfig = Omit<Linter.Config, 'plugins'> & {
    plugins?: Record<string, any>;
}

export default function daopk(options: Options = {}, ...userConfigs: Linter.Config[]): LinterConfig[] {
    const configs: LinterConfig[] = [
        {
            ignores: [
                ...gitignore().ignores,
                ...options.ignores ?? [],
            ],
            name: 'daopk/ignores',
        },
        {
            name: 'daopk/eslint',
            rules: {
                eqeqeq: 'error',
                'no-cond-assign': ['error', 'always'],
                'no-extra-boolean-cast': 'error',
                'no-regex-spaces': 'error',
                'no-unused-labels': 'error',
                'no-unused-vars': 'off',

                'object-curly-newline': 'off',
                'yoda': ['error', 'never'],
            },
        },
        {
            name: 'daopk/stylistic',
            plugins: {
                stylistic,
            },
            rules: {
                'stylistic/array-bracket-newline': ['error', 'consistent'],
                'stylistic/array-bracket-spacing': ['error', 'never'],
                'stylistic/array-element-newline': ['error', 'consistent'],
                'stylistic/brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
                'stylistic/comma-dangle': ['error', 'always-multiline'],
                'stylistic/indent': ['error', 4],
                'stylistic/no-multi-spaces': 'error',
                'stylistic/no-multiple-empty-lines': ['error', { 'max': 1 }],
                'stylistic/quotes': ['error', 'single'],
                'stylistic/semi': ['error', 'never'],
            },
        },
        {
            files: ['**/*.ts'],
            languageOptions: {
                ecmaVersion: 'latest',
                parser: tsParser,
                sourceType: 'module',
            },
            name: 'daopk/typescript',
            plugins: {
                typescript,
            },
            rules: {
                'typescript/consistent-type-imports': ['error', {
                    disallowTypeAnnotations: false,
                    fixStyle: 'separate-type-imports',
                    prefer: 'type-imports',
                }],

                'typescript/no-unused-vars': 'off',
            },
        },
        {
            name: 'daopk/imports',
            plugins: {
                import: importX,
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
                        'args': 'after-used',
                        'argsIgnorePattern': '^_',
                        'vars': 'all',
                        'varsIgnorePattern': '^_',
                    },
                ],
            },
        },
        {
            name: 'daopk/antfu',
            plugins: {
                antfu,
            },
            rules: {
                'antfu/consistent-chaining': 'error',
                'antfu/consistent-list-newline': 'error',
                'antfu/import-dedupe': 'error',
            },
        },
        {
            name: 'daopk/node',
            plugins: {
                node,
            },
            rules: {
                'node/prefer-node-protocol': 'error',
            },
        },
        {
            name: 'daopk/perfectionist',
            plugins: {
                perfectionist,
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
                'perfectionist/sort-objects': 'error',
            },
        },
    ]

    if (options.rules) {
        configs.push({
            name: 'daopk/rules',
            rules: {
                ...options.rules,
            },
        })
    }

    if (userConfigs.length > 0) {
        configs.push(...userConfigs)
    }

    return configs
}
