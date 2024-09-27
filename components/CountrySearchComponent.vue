<script setup lang="ts">
const { data } = defineProps<{ data: Country[] | null }>();

const query = ref('');

const filteredCountries = computed(() => {
    const queryText = query.value;

    if (!queryText.length) return data;

    return (data as Country[])?.filter((country: Country) =>
        country.name.toLowerCase().includes(queryText.toLowerCase())
    );
});
</script>

<template>
    <div class="flex flex-col gap-5">
        <div>
            <input
                :value="query"
                type="text"
                placeholder="UK"
                class="input input-bordered w-full max-w-xs dark:input-accent"
                @input="query = ($event.target as HTMLInputElement).value"
            >
        </div>
        <div />
        <h2 class="text-2xl mb-5">Countries List</h2>

        <div
            class="grid grid-cols-2 md:grid-cols-3 flex-col gap-3 overflow-y-scroll max-h-[700px]"
        >
            <CountryCardComponent
                v-for="country in filteredCountries"
                :key="country.countryCode"
            >
                <NuxtLink
                    :to="{
                        name: 'country-name',
                        params: { name: country.name },
                    }"
                >
                    <h2 class="card-title">
                        {{ country.name }}
                    </h2>
                </NuxtLink>
            </CountryCardComponent>
        </div>
    </div>
</template>
