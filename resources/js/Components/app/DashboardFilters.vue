<script setup>
import BaseSelect from '@/Components/base/BaseSelect.vue';
import { ref } from 'vue';
import { Filter } from 'lucide-vue-next';

const selectedPeriod = ref('last_6_months');
const selectedType = ref('all');

const periodOptions = [
    { label: 'Ultimi 6 mesi', value: 'last_6_months' },
    { label: 'Ultimo anno', value: 'last_year' },
    { label: 'Tutto il tempo', value: 'all_time' },
];

const typeOptions = [
    { label: 'Tutti i contratti', value: 'all' },
    { label: 'Determinato', value: 'fixed_term' },
    { label: 'Indeterminato', value: 'permanent' },
];
</script>

<template>
    <div class="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div class="flex items-center gap-2">
            <Filter class="h-5 w-5 text-surface-500" />
            <h2 class="text-xl font-bold text-surface-900 dark:text-surface-0">Dashboard</h2>
        </div>

        <div class="flex flex-wrap gap-3">
            <BaseSelect
                v-model="selectedPeriod"
                :options="periodOptions"
                placeholder="Seleziona periodo"
                class="!w-full md:!w-48"
            />
            <BaseSelect
                v-model="selectedType"
                :options="typeOptions"
                placeholder="Tipo contratto"
                class="!w-full md:!w-48"
            />
        </div>
    </div>
</template>
