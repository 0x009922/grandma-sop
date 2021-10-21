import { defineConfig } from 'vitepress'
import Windi from 'vite-plugin-windicss'
import path from 'path'

interface SideBarItem {
    text: string
    link?: string
    children?: SideBarItem[]
}

function getSidebarLinks(): SideBarItem[] {
    return [
        {
            text: 'Главная',
            link: '/',
        },
        {
            text: 'Android',
            children: [
                {
                    text: 'YouTube',
                    link: '/android/youtube/',
                },
            ],
        },
    ]
}

export default defineConfig({
    base: '/grandma-sop',
    title: 'Стандартные операционные процедуры',
    vite: {
        plugins: [Windi({ config: path.resolve(__dirname, '../windi.config.ts') })],
    },
    themeConfig: {
        sidebar: {
            '/': getSidebarLinks(),
        },
    },
})
