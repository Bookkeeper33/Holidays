<script setup lang="ts">
const route = useRoute();
const startYear = 2020;
const endYear = 2030;
const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => i + startYear);
const currentYear = ref(new Date().getFullYear());
const config = useRuntimeConfig();

const { data, error, status } = await useAsyncData(
    'holidays',
    async () => {
        const countries: Country[] = await $fetch(
            `${config.public.apiBase}/AvailableCountries`
        );
        const country: Country | undefined = countries.find(
            (c) => c.name === route.params.name
        );
        const holidays: Holiday[] = await $fetch(
            `${config.public.apiBase}/PublicHolidays/${currentYear.value}/${country?.countryCode}`
        );

        return {
            holidays,
        };
    },
    {
        watch: [currentYear],
        lazy: true,
    }
);
</script>

<template>
    <div>
        <NuxtLink to="/" class="btn btn-info mt-3 ms-5 p-2">Back to Home</NuxtLink>
        <div class="p-5">
            <h2 class="text-2xl font-semibold">{{ route.params.name }}</h2>
            <p class="text-xl">Holidays list:</p>
        </div>
        <span
            v-if="status === 'pending' || status === 'idle'"
            class="loading loading-dots loading-lg"
        />
        <p v-else-if="status === 'error'">
            Oopss...Something went wrong!
            {{ error?.statusMessage + ' ' + error?.statusCode }}
        </p>
        <template v-else>
            <div class="p-5 flex flex-col gap-10">
                <ul class="flex flex-col lg:grid lg:grid-cols-3 gap-5 justify-center">
                    <li
                        v-for="holiday in data?.holidays"
                        :key="holiday.name"
                        class="glass border p-2 rounded-sm space-y-2"
                    >
                        <p>Name: {{ holiday.name }}</p>
                        <p>Type: {{ holiday.types[0] }}</p>
                        <p>Date: {{ holiday.date }}</p>
                    </li>
                </ul>
                <ul class="flex flex-wrap justify-center gap-3 lg:gap-10">
                    <li v-for="year in years" :key="year">
                        <button
                            class="btn btn-outline btn-info"
                            @click="currentYear = year"
                        >
                            {{ year }}
                        </button>
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>
