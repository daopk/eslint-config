import type { LinterConfig } from '../types'
import nodePlugin from 'eslint-plugin-n'

export function node(): LinterConfig {
    return {
        name: 'daopk/node',
        plugins: {
            node: nodePlugin,
        },
        rules: {
            'node/prefer-node-protocol': 'error',
        },
    }
}
