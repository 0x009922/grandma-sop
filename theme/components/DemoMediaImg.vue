<script setup lang="ts">
import { useDemoShared } from '../state/demo'

const shared = useDemoShared()
</script>

<template>
    <img
        v-show="shared.visible"
        :src="shared.src"
        :height="shared.height"
        :width="shared.width"
    >
</template>
