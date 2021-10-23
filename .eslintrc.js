module.exports = {
    extends: ['plugin:vue/vue3-recommended'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    rules: {
        'vue/html-indent': ['warn', 4],
    },
}
