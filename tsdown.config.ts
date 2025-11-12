import { defineConfig } from 'tsdown'

export default defineConfig({
    clean: true,
    dts: true,
    entry: [
        'src/index.ts',
        'src/presets/nestjs.ts',
    ],
    shims: true,
})
