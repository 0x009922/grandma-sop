<script setup>
import demoInputField from '/assets/youtube-search.results-field.png'
import demoSearchIcon from '/assets/youtube-main-screen.search-icon-emphasize.png'

import start from '/assets/youtube-search.1-start.mp4'
import searchList from '/assets/youtube-search.2-list.mp4'
import videoTap from '/assets/youtube-search.3-tap.mp4'

import SearchIcon from '~icons/ic/round-search'
</script>

<template>
    <p>
        Чтобы искать видео, найди сверху <strong>значок лупы</strong>
        <InlineIcon class="ml-1">
            <SearchIcon class="inline-block" />
        </InlineIcon>
        или <b>поле ввода</b> и нажми на него:
    </p>

    <div class="grid lg:grid-cols-2 gap-4 mb-4 justify-items-center">
        <Demo
            :src="demoInputField"
            height="640"
            width="320"
        >
            <template #description>
                Если уже был поиск, то сверху расположено <b>поле ввода</b>
            </template>
        </Demo>

        <Demo
            :src="demoSearchIcon"
            height="640"
            width="320"
        >
            <template #description>
                Иначе просто значок лупы
            </template>
        </Demo>
    </div>

    <p>
        Итак, <b>нужно кликнуть на лупу или на поле поиска</b> и должна появиться клавиатура, на которой надо набрать
        свой <u>поисковый запрос</u>:
    </p>

    <div class="flex justify-center">
        <Demo
            :src="start"
            description="Так выглядит набор поиска и выдача результатов"
            height="640"
            width="320"
            video
        />
    </div>

    <p>
        После поискового запроса тебе представляется список из найденных видео. Его можно листать и выбирать, какое
        видео ты хочешь посмотреть:
    </p>

    <div class="flex justify-center">
        <Demo
            :src="searchList"
            description="Список результатов, который можно листать туда-сюда"
            height="640"
            width="320"
            video
        />
    </div>

    <p>Если захотелось какое-то видео просмотреть, нажми на него, и оно откроется:</p>

    <div class="flex justify-center">
        <Demo
            :src="videoTap"
            height="640"
            width="320"
            video
            description="Нажми на видео, чтобы посмотреть"
        />
    </div>
</template>
