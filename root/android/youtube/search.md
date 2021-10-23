<script setup>
import searchResults from '/assets/youtube-search.results.png'
import start from '/assets/youtube-search.1-start.gif'
import searchList from '/assets/youtube-search.2-list.gif'

import SearchIcon from '~icons/ic/round-search'
</script>

# Поиск в YouTube

Чтобы искать видео, найди сверху **значок лупы** <InlineIcon><SearchIcon class="inline-block" /></InlineIcon> или **поле ввода** и нажми на него:

<div>
    <Demo :src="searchResults" height="640" />
</div>

<Demo :src="start"  />

<Demo :src="searchList" description="Список можно скроллить" />
