import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    preflight: false,
    extract: {
        include: ['**/*.{md,vue}', '.vitepress/**/*.vue', '../theme/**/*.{md,vue}'],
    },
})
