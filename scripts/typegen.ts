import type { LinterConfig } from '../src/types'
import fs from 'node:fs/promises'
import stylistic from '@stylistic/eslint-plugin'
import typescript from '@typescript-eslint/eslint-plugin'
import antfu from 'eslint-plugin-antfu'
import importX from 'eslint-plugin-import-x'
import node from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import unusedImports from 'eslint-plugin-unused-imports'
import vue from 'eslint-plugin-vue'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'

const configs: LinterConfig[] = [
    {
        plugins: {
            '': {
                rules: Object.fromEntries(builtinRules.entries()),
            },
            antfu,
            'import': importX,
            node,
            perfectionist,
            stylistic,
            typescript,
            'unused-imports': unusedImports,
            vue,
        },
    },
]

const dts = await flatConfigsToRulesDTS(configs)

await fs.writeFile('src/typegen.d.ts', dts)
