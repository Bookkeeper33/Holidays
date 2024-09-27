<script setup lang="ts">
const config = useRuntimeConfig();

const { data, error, status } = await useFetch<Country[]>(
    `${config.public.apiBase}/AvailableCountries`,
    {
        lazy: true,
        server: false,
    }
);
</script>

<template>
    <div class="flex flex-col lg:flex-row gap-10 p-5">
        <span
            v-if="status === 'pending' || status === 'idle'"
            class="loading loading-dots loading-lg"
        />
        <p v-else-if="status === 'error'">
            Oopss...Something went wrong!
            {{ error?.statusMessage + ' ' + error?.statusCode }}
        </p>
        <template v-else>
            <CountrySearchComponent
                class="flex-1"
                :data="data"
                :error="error"
                :status="status"
            />
            <RandomCountriesComponent
                class="flex-1"
                :data="data"
                :error="error"
                :status="status"
            />
        </template>
    </div>
</template>
