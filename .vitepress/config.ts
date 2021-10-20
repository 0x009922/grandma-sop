import { defineConfig } from 'vitepress'
import Windi from 'vite-plugin-windicss'
import path from 'path'

export default defineConfig({
    title: 'Стандартные операционные процедуры',
    vite: {
        plugins: [Windi({ config: path.resolve(__dirname, '../windi.config.ts') })],
    },
})
