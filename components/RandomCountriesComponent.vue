<script setup lang="ts">
const { data } = defineProps<{
    data?: Country[] | null;
}>();

const getRandomCountries = (arr: Country[], num: number) => {
    const result = [];
    const copy = [...arr];

    for (let i = 0; i < num; i++) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        result.push(copy[randomIndex]);
        copy.splice(randomIndex, 1);
    }
    return result;
};

const randomCountries = ref(getRandomCountries(data as Country[], 3));
</script>

<template>
    <div>
        <h2 class="text-2xl mb-5">Random Countries Widget</h2>
        <div class="flex flex-col gap-5 p-5 border rounded-md shadow-md">
            <RandomCountryCardComponent
                v-for="country in randomCountries"
                :key="country.countryCode"
                :country="country"
            />
        </div>
    </div>
</template>
