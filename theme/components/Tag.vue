<template>
    <span class="tag">
        <slot />
    </span>
</template>

<style scoped lang="scss">
.tag {
    @apply p-2 rounded text-white;
    background-color: var(--c-brand);
}
</style>
