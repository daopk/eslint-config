import type { Linter } from 'eslint'
import type { StylisticOptions } from './configs/stylistic'
import type { RuleOptions } from './typegen'

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
