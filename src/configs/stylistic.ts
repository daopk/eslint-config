import type { StylisticCustomizeOptions } from '@stylistic/eslint-plugin'
import type { LinterConfig } from '../types'
import stylisticPlugin from '@stylistic/eslint-plugin'

export type StylisticOptions = Omit<StylisticCustomizeOptions, 'flat' | 'pluginName'>

export function stylistic(options: StylisticOptions = {}): LinterConfig {
    const stylisticConfig = stylisticPlugin.configs.customize({
        arrowParens: options.arrowParens ?? true,
        blockSpacing: options.blockSpacing,
        braceStyle: options.braceStyle,
        commaDangle: options.commaDangle,
        indent: options.indent ?? 4,
        jsx: options.jsx,
        pluginName: 'stylistic',
        quoteProps: options.quoteProps,
        quotes: options.quotes ?? 'single',
        semi: options.semi ?? false,
    })

    return {
        name: 'daopk/stylistic',
        plugins: {
            stylistic: {
                rules: stylisticPlugin.rules,
            },
        },
        rules: {
            ...stylisticConfig.rules,

            'stylistic/array-bracket-newline': ['error', 'consistent'],
            'stylistic/array-element-newline': ['error', 'consistent'],
        },
    }
}
