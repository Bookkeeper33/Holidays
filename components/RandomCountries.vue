<template>
    <div>
        <h2 class="text-2xl mb-5">Random Countries Widget</h2>

        <div class="flex flex-col gap-5 p-5 border rounded-md shadow-md">
            <CountryCard>
                <div class="flex flex-col gap-2 w-full text-left">
                    <h2 class="card-title">London</h2>
                    <p>Next Holiday</p>
                    <p>
                        <time datetime="2024-09-26">September 26</time>
                    </p>
                </div>
            </CountryCard>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
