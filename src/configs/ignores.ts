import type { LinterConfig } from '../types'
import gitignore from 'eslint-config-flat-gitignore'

export function ignores(userIgnores: string[] = []): LinterConfig {
    return {
        name: 'daopk/ignores',
        ignores: [
            ...gitignore().ignores,
            ...userIgnores ?? [],
        ],
    }
}
