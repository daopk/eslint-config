import type { StylisticOptions } from './configs/stylistic'
import type { RuleOptions } from './typegen'
import type { Linter } from 'eslint'

export interface Options {
    stylistic?: StylisticOptions
    ignores?: string[]
    rules?: RuleOptions
    vue?: boolean
}

export type LinterConfig = Omit<Linter.Config, 'plugins'> & {
    plugins?: Record<string, any>
}

export type Awaitable<T> = T | Promise<T>
