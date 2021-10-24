<script setup lang="ts">
import { ref } from 'vue'
import { whenever } from '@vueuse/core'

const props = defineProps<{
    flag: boolean
}>()

const triggered = ref(false)
whenever(
    () => props.flag,
    () => (triggered.value = true),
    { immediate: true }
)
</script>

<template>
    <slot v-bind="{ triggered }" />
</template>
