<template>
    <span class="inline-icon">
        <slot />
    </span>
</template>

<style lang="scss">
span.inline-icon {
    @apply relative rounded-sm px-1 inline-flex items-center bg-gray-100 border border-solid border-gray-300;

    $my: 0.4rem;
    margin: -$my 0;
    height: 1rem + $my;
    top: 0.25em;
}
</style>
