import type { LinterConfig, Options } from '../types'
import { antfu } from '../configs/antfu'
import { builtin } from '../configs/builtin'
import { ignores } from '../configs/ignores'
import { imports } from '../configs/imports'
import { node } from '../configs/node'
import { perfectionist } from '../configs/perfectionist'
import { stylistic } from '../configs/stylistic'
import { typescript } from '../configs/typescript'

export function presetNestjs(options: Options = {}): LinterConfig[] {
    return [
        ignores(options.ignores),
        builtin(),
        stylistic({
            semi: true,
            jsx: false,
            ...options.stylistic,
        }),
        typescript({
            rules: {
                'typescript/consistent-type-imports': ['warn', { prefer: 'no-type-imports' }],
            },
        }),
        imports(),
        antfu(),
        node(),
        perfectionist(),
    ]
}
