<script setup>
import BaseCard from '@/Components/base/BaseCard.vue';
import BaseChart from '@/Components/base/BaseChart.vue';
import { ref } from 'vue';

const chartData = ref({
    labels: ['Indeterminato', 'Determinato'],
    datasets: [
        {
            data: [85, 45],
            backgroundColor: [
                'rgba(139, 92, 246, 0.8)', // Violet-500
                'rgba(236, 72, 153, 0.8)', // Pink-500
            ],
            hoverBackgroundColor: ['rgba(139, 92, 246, 1)', 'rgba(236, 72, 153, 1)'],
            borderWidth: 0,
        },
    ],
});

const chartOptions = ref({
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                padding: 20,
            },
        },
    },
    maintainAspectRatio: false,
});
</script>

<template>
    <BaseCard class="h-full">
        <div class="mb-4">
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0">Tipologia Contratti</h3>
            <p class="text-sm text-surface-500 dark:text-surface-400">Distribuzione per tipo di contratto</p>
        </div>
        <div class="flex items-center justify-center">
            <BaseChart type="pie" :data="chartData" :options="chartOptions" height="250" />
        </div>
    </BaseCard>
</template>
