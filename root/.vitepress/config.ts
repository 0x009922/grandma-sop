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
            text: 'Android - YouTube',
            children: [
                {
                    text: 'Поиск видео',
                    link: '/android/youtube/search',
                },
                {
                    text: 'Поиск канала',
                    link: '/android/youtube/search-channel',
                },
                {
                    text: 'Управление видео',
                    link: '/android/youtube/video-controls',
                },
                {
                    text: 'Закрытие видео',
                    link: '/android/youtube/close-video',
                },
            ],
        },
        // {
        //     text: 'TODO',
        //     link: '/todo',
        // },
    ]
}

export default defineConfig({
    base: '/sop/',
    title: 'СОП',
    description: 'Стандартные операционные процедуры по пользованию телефоном и не только',
    vite: {
        plugins: [Windi({ config: path.resolve(__dirname, '../../windi.config.ts') }), Icons()],
        build: {
            minify: false,
        },
    },
    themeConfig: {
        sidebar: {
            '/': getSidebarLinks(),
        },
    },
})
