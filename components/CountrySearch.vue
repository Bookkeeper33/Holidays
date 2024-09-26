<script setup>
const { data, status, error } = await useFetch(
    'https://date.nager.at/api/v3/AvailableCountries',
    { lazy: true, server: false }
);
const query = ref('');

const filteredCountries = computed(() => {
    const queryText = query.value;

    if (!queryText.length) return data.value;

    return data.value.filter((country) =>
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
                @input="query = $event.target.value"
            />
        </div>
        <div>
            <h2 class="text-2xl mb-5">Countries List</h2>
            <div class="flex flex-col gap-3">
                <span
                    v-if="status === 'pending' || status === 'idle'"
                    class="loading loading-dots loading-lg"
                />
                <p v-else-if="status === 'error'">
                    Oopss...Something went wrong!
                    {{ error.statusMessage + ' ' + error.statusCode }}
                </p>
                <template v-else>
                    <CountryCard v-for="country in filteredCountries" :key="country.code"
                        ><h2 class="card-title">{{ country.name }}</h2></CountryCard
                    >
                </template>
            </div>
        </div>
    </div>
</template>
