<script setup lang="ts">
const props = defineProps<{
    src: string
    alt?: string
    description?: string
    width?: string | number
    height?: string | number
}>()
</script>

<template>
    <div class="flex justify-center">
        <div class="rounded shadow-md overflow-hidden">
            <img
                :src="src"
                class="block"
                :alt="alt || description"
                :width="width"
                :height="height"
            >

            <div
                v-if="description"
                class="p-2 text-gray-500 text-sm"
            >
                {{ description }}
            </div>
        </div>
    </div>
</template>
