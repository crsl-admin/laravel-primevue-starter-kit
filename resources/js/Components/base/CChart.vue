<script setup>
import Chart from 'primevue/chart';
import { onMounted, ref, watch } from 'vue';

const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    data: {
        type: Object,
        required: true,
    },
    options: {
        type: Object,
        default: () => ({}),
    },
    height: {
        type: String,
        default: '300',
    },
});

const chartRef = ref(null);

// Gestione dinamica dei colori per Light/Dark mode se necessario
// In questo caso, PrimeVue 4 Aura/Lara dovrebbe gestire molto via CSS variables,
// ma Chart.js a volte ha bisogno di update manuali per le label.
</script>

<template>
    <div class="w-full">
        <Chart
            ref="chartRef"
            :type="type"
            :data="data"
            :options="options"
            :style="{ height: height + 'px' }"
        />
    </div>
</template>
