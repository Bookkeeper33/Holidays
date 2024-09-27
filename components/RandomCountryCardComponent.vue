<script setup lang="ts">
const { country } = defineProps<{ country: Country }>();

const config = useRuntimeConfig();

const { data, error, status } = await useFetch(
    `${config.public.apiBase}/CountryInfo/${country.countryCode}`,
    {
        lazy: true,
        server: false,
        transform: (data: Holiday[]) => data[0],
    }
);
</script>

<template>
    <div class="card bg-neutral text-neutral-content card-compact">
        <span
            v-if="status === 'pending' || status === 'idle'"
            class="loading loading-dots loading-lg"
        />
        <p v-else-if="status === 'error'">
            Oopss...Something went wrong!
            {{ error?.statusMessage + ' ' + error?.statusCode }}
        </p>
        <div v-else class="card-body glass shadow-md rounded-md">
            <NuxtLink
                :to="{
                    name: 'country-name',
                    params: { name: country.name },
                }"
            >
                <h2 class="card-title">{{ country?.name }}</h2>
                <p>Next Public Holiday: {{ data?.name }}</p>
                <p>
                    Date: <time>{{ data?.date }}</time>
                </p>
            </NuxtLink>
        </div>
    </div>
</template>
