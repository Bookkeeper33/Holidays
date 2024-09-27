// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    runtimeConfig: { public: { apiBase: process.env.API_BASE_URL } },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
