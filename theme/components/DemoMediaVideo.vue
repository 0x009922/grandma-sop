<script setup lang="ts">
import { useDemoShared } from '../state/demo'
import { ref, computed, onMounted } from 'vue'
import { templateRef, and, whenever, not, useRafFn } from '@vueuse/core'

const shared = useDemoShared()

const isActive = computed(() => shared.active)

const el = templateRef('video')
function getVideoEl(): HTMLVideoElement {
    const val = getVideoElSoft()
    if (!val) throw new Error('No video element')
    return val
}
function getVideoElSoft(): null | HTMLVideoElement {
    return el.value as any
}
const isElemMounted = ref(false)
onMounted(() => (isElemMounted.value = true))

const actuallyPlaying = ref(false)
const canPlay = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const progress = computed(() => currentTime.value / duration.value)
const sliderRight = computed(() => `${(1 - progress.value) * 100}%`)

function updateTime() {
    const el = getVideoElSoft()
    if (el) {
        currentTime.value = el.currentTime
    }
}
const { pause: pauseTimeUpdate, resume: resumeTimeUpdate } = useRafFn(updateTime, { immediate: false })

function loaded() {
    duration.value = getVideoEl().duration
}

function pause() {
    getVideoEl().pause()
}

function resetTime() {
    getVideoEl().currentTime = 0
}

function play() {
    getVideoEl().play()
}

whenever(and(isActive, isElemMounted, not(actuallyPlaying)), () => (play(), resumeTimeUpdate()), { immediate: true })
whenever(and(not(isActive), isElemMounted, actuallyPlaying), () => (pause(), resetTime(), pauseTimeUpdate()), {
    immediate: true,
})
</script>

<template>
    <div
        v-show="shared.visible"
        class="demo-media-video"
    >
        <video
            ref="video"
            :width="shared.width"
            :height="shared.height"
            loop
            autoplay
            muted
            @canplay="canPlay = true"
            @play="actuallyPlaying = true"
            @pause="actuallyPlaying = false"
            @timeupdate="updateTime"
            @loadeddata="loaded"
            @click="resetTime"
        >
            <source :src="shared.src">
        </video>

        <div class="demo-media-video__slider" />
    </div>
</template>

<style lang="scss">
.demo-media-video {
    @apply relative;

    video {
        @apply block;
    }

    &__slider {
        @apply absolute top-0 left-0 bg-blue-400;
        right: v-bind(sliderRight);
        height: 2px;
    }
}
</style>
