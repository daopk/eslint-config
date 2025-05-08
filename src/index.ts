import type { Linter } from 'eslint'
import type { LinterConfig, Options } from './types'
import { antfu } from './configs/antfu'
import { builtin } from './configs/builtin'
import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { node } from './configs/node'
import { perfectionist } from './configs/perfectionist'
import { stylistic } from './configs/stylistic'
import { typescript } from './configs/typescript'

export * from './presets/nestjs'

export default function daopk(options: Options = {}, ...userConfigs: Linter.Config[]): LinterConfig[] {
    const configs: LinterConfig[] = [
        ignores(options.ignores),
        builtin(),
        stylistic(options.stylistic),
        typescript(),
        imports(),
        antfu(),
        node(),
        perfectionist(),
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
