import type { LinterConfig, Options } from '../types'
import daopk from '..'

export async function presetNestjs(options: Options = {}): Promise<LinterConfig[]> {
    return daopk({
        stylistic: {
            semi: true,
            jsx: false,
            ...options.stylistic,
        },
        rules: {
            'typescript/consistent-type-imports': ['warn', { prefer: 'no-type-imports' }],
            ...options.rules,
        },
        ...options,
    })
}
