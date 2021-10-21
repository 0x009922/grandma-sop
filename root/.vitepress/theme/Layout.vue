<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRouter } from 'vitepress'

const { Layout } = DefaultTheme
const router = useRouter()

function saveMe() {
    router.go('/')
}
</script>

<template>
    <Layout>
        <template #navbar-search>
            <div
                class="accent-btn"
                role="button"
                tabindex="0"
                @click="saveMe"
            >
                Кликни на меня, если потерялась!
            </div>
        </template>
    </Layout>
</template>

<style lang="scss" scoped>
.accent-btn {
    @apply inline-block px-2 py-1 text-white rounded select-none cursor-pointer font-bold;
    background: var(--c-brand);

    &:focus {
        outline: 2px solid var(--c-brand);
        outline-offset: 2px;
    }
}
</style>
