import type { Linter } from 'eslint'
import type { LinterConfig, Options } from './types'
import { isPackageExists } from 'local-pkg'
import { antfu } from './configs/antfu'
import { builtin } from './configs/builtin'
import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { node } from './configs/node'
import { perfectionist } from './configs/perfectionist'
import { stylistic } from './configs/stylistic'
import { typescript } from './configs/typescript'
import { interopDefault } from './utils'

export default async function daopk(options: Options = {}, ...userConfigs: Linter.Config[]) {
    const { vue: enableVue = isPackageExists('vue') } = options

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

    if (enableVue) {
        configs.push(...await interopDefault((await import('./configs/vue')).vue()))
    }

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
