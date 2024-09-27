<template>
    <div class="min-h-screen flex-col">
        <NuxtPage />
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(0.5rem);
}
</style>
