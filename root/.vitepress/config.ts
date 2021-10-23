import { defineConfig } from 'vitepress'
import Windi from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
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
                    children: [
                        {
                            text: 'Поиск',
                            link: '/android/youtube/search',
                        },
                    ],
                },
            ],
        },
    ]
}

export default defineConfig({
    base: '/sop/',
    title: 'Стандартные операционные процедуры',
    vite: {
        plugins: [Windi({ config: path.resolve(__dirname, '../../windi.config.ts') }), Icons()],
    },
    themeConfig: {
        sidebar: {
            '/': getSidebarLinks(),
        },
    },
})
