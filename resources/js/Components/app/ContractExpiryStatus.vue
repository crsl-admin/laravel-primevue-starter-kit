<script setup>
import BaseCard from '@/Components/base/BaseCard.vue';
import BaseChart from '@/Components/base/BaseChart.vue';
import { ref, computed } from 'vue';

const chartData = ref({
    labels: ['Attivi', 'In Scadenza (30gg)', 'Scaduti'],
    datasets: [
        {
            data: [120, 15, 5],
            backgroundColor: [
                'rgba(34, 197, 94, 0.8)', // Green-500
                'rgba(249, 115, 22, 0.8)', // Orange-500
                'rgba(239, 68, 68, 0.8)', // Red-500
            ],
            hoverBackgroundColor: ['rgba(34, 197, 94, 1)', 'rgba(249, 115, 22, 1)', 'rgba(239, 68, 68, 1)'],
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
        tooltip: {
            enabled: true,
        },
    },
    maintainAspectRatio: false,
    cutout: '60%',
});
</script>

<template>
    <BaseCard class="h-full">
        <div class="mb-4">
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0">Stato Contratti</h3>
            <p class="text-sm text-surface-500 dark:text-surface-400">Panoramica dello stato attuale dei contratti</p>
        </div>
        <div class="flex items-center justify-center">
            <BaseChart type="doughnut" :data="chartData" :options="chartOptions" height="250" />
        </div>
    </BaseCard>
</template>
