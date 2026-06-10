<script setup>
import BaseCard from '@/Components/base/BaseCard.vue';
import BaseChart from '@/Components/base/BaseChart.vue';
import { ref } from 'vue';

const chartData = ref({
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu'],
    datasets: [
        {
            label: 'Scadenze Previste',
            data: [4, 8, 15, 6, 12, 5],
            backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue-500
            borderColor: 'rgb(59, 130, 246)',
            borderWidth: 1,
            borderRadius: 6,
        },
    ],
});

const chartOptions = ref({
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: true,
                drawBorder: false,
                color: 'rgba(161, 161, 170, 0.1)',
            },
            ticks: {
                stepSize: 5,
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
    maintainAspectRatio: false,
});
</script>

<template>
    <BaseCard class="h-full">
        <div class="mb-4">
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0">
                Timeline Scadenze
            </h3>
            <p class="text-sm text-surface-500 dark:text-surface-400">
                Previsione delle scadenze nei prossimi 6 mesi
            </p>
        </div>
        <BaseChart type="bar" :data="chartData" :options="chartOptions" height="250" />
    </BaseCard>
</template>
