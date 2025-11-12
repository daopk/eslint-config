import type { LinterConfig, Options } from '../types'
import daopk from '..'

export async function presetNestjs(options: Options = {}, ...userConfigs: LinterConfig[]): Promise<LinterConfig[]> {
    return daopk({
        stylistic: {
            semi: true,
            jsx: false,
            ...options.stylistic,
        },
        ...options,
    }, {
        name: 'daopk/typescript/nestjs',
        files: ['**/*.ts'],
        rules: {
            'typescript/consistent-type-imports': ['warn', { prefer: 'no-type-imports' }],
        },
    }, ...userConfigs)
}
