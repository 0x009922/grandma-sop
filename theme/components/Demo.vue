<script setup lang="ts">
import { computed, useSlots, ref, reactive, readonly, provide } from 'vue'
import { templateRef, useIntersectionObserver } from '@vueuse/core'
import OneTimeTrigger from './OneTimeTrigger.vue'
import DemoMediaVideo from './DemoMediaVideo.vue'
import DemoMediaImg from './DemoMediaImg.vue'
import { DemoShared, KEY } from '../state/demo'

const props = defineProps({
    src: { type: String, required: true },
    description: String,
    video: Boolean,
    width: { type: [String, Number], required: true },
    height: { type: [String, Number], required: true },
})

const isVideo = computed(() => props.video)

function makePx(val: string | number): string {
    return `${val}px`
}
const widthPx = computed(() => makePx(props.width))
const heightPx = computed(() => makePx(props.height))

const slots = useSlots()
const isDescriptionSlotDefined = computed(() => !!slots.description)

const isImgVisible = ref(false)
const imgContainer = templateRef('imgContainer')
useIntersectionObserver(
    imgContainer,
    ([{ isIntersecting }]) => {
        isImgVisible.value = isIntersecting
    },
    { threshold: 0.5 }
)

const shared: DemoShared = reactive({
    src: computed(() => props.src),

    width: computed(() => props.width),
    height: computed(() => props.height),
    active: isImgVisible,
    visible: isImgVisible,
})
provide(KEY, readonly(shared))
</script>

<template>
    <div class="img-demo">
        <div
            ref="imgContainer"
            class="img-demo__img-container"
        >
            <OneTimeTrigger
                v-slot="{ triggered }"
                :flag="isImgVisible"
            >
                <transition name="img-fade-transition">
                    <template v-if="triggered">
                        <DemoMediaVideo v-if="isVideo" />
                        <DemoMediaImg v-else />
                    </template>
                </transition>
            </OneTimeTrigger>
        </div>

        <div
            v-if="description || isDescriptionSlotDefined"
            class="img-demo__description"
        >
            <slot name="description">
                {{ description }}
            </slot>
        </div>
    </div>
</template>

<style lang="scss">
.img-demo {
    @apply border-1 border-solid border-gray-200 bg-white rounded shadow-lg overflow-hidden;

    &__img-container {
        @apply flex justify-center;
        width: v-bind(widthPx);
        height: v-bind(heightPx);
    }

    &__description {
        @apply p-2 text-gray-500 text-sm border-0 border-t border-solid border-gray-200;
        width: v-bind(widthPx);
    }
}

.img-fade-transition {
    &-enter-active,
    &-leave-active {
        transition: all 0.3s;
        @apply ease-in-out;
    }

    &-leave-to,
    &-enter-from {
        opacity: 0;
    }
}
</style>
