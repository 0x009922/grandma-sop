<script setup>
import vidPlayPause from '/assets/youtube-video-play-pause.mp4'
import vidFullscreen from '/assets/youtube-video-fullscreen.mp4'
import vidSeeking from '/assets/youtube-video-seeking.mp4'

import IconPlay from '~icons/mdi/play'
import IconPause from '~icons/mdi/pause'
import IconFs from '~icons/mdi/fullscreen'
import IconFsExit from '~icons/mdi/fullscreen-exit'
</script>

# Управление видео

## Play/Pause

Чтобы оставить (или продолжить) проигрывание видео, надо использовать иконки **play** <InlineIcon><IconPlay /></InlineIcon> или **pause** <InlineIcon><IconPause /></InlineIcon>. Если их не видно, то надо нажать на само видео и они появятся. Смотри, как это выглядит:

<HorCenter><Demo :src="vidPlayPause" video width="320" height="640"  description="Нажимаем на видео, появляются кнопки play/pause, жмём кнопки"/></HorCenter>

## Полноэкранный режим

Для входа в полноэкранный режим есть кнопка **полный экран** <InlineIcon><IconFs /></InlineIcon>. Для выхода из него - **выход из полного экрана** <InlineIcon><IconFsExit /></InlineIcon>.

<HorCenter><Demo :src="vidFullscreen" video width="320" height="640"/></HorCenter>

> Как ты можешь заметить, в полноэкранном режиме тоже можно управлять видео - например, поставить на паузу.

## Перемотка

Можно перематывать видео вперёд/назад с помощью **<span class="text-[#c4302b]">красного</span> ползунка**. Если его не видно, но надо нажать на видео, чтобы появились все его элементы управления, в том числе и этот ползунок **на нижней <span class="text-[#c4302b]">красной</span> полоске**.

<HorCenter><Demo :src="vidSeeking" video width="320" height="640" /></HorCenter>

## Закрытие

См. [Закрытие видео](./close-video)
