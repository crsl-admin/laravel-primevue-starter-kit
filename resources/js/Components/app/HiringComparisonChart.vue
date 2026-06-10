<script setup>
import BaseCard from '@/Components/base/BaseCard.vue';
import BaseChart from '@/Components/base/BaseChart.vue';
import { ref } from 'vue';

const chartData = ref({
    labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    datasets: [
        {
            label: '2025 (Anno Corrente)',
            data: [12, 19, 15, 8, 12, 14, 10, 5, 18, 22, 15, 10],
            backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue-500
            borderColor: 'rgb(59, 130, 246)',
            borderWidth: 1,
            borderRadius: 4,
        },
        {
            label: '2024 (Anno Precedente)',
            data: [10, 15, 12, 10, 14, 11, 8, 4, 15, 20, 12, 8],
            backgroundColor: 'rgba(161, 161, 170, 0.3)', // Surface-400 with opacity
            borderColor: 'rgb(161, 161, 170)',
            borderWidth: 1,
            borderRadius: 4,
        },
    ],
});

const chartOptions = ref({
    plugins: {
        legend: {
            position: 'top',
            labels: {
                usePointStyle: true,
                padding: 20,
            },
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(161, 161, 170, 0.1)',
            },
        },
        x: {
            grid: {
                display: false,
            },
        },
    },
    responsive: true,
    maintainAspectRatio: false,
});
</script>

<template>
    <BaseCard class="h-full">
        <div class="mb-4">
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0">
                Confronto Assunzioni
            </h3>
            <p class="text-sm text-surface-500 dark:text-surface-400">
                Numero di assunti mensili comparato con l'anno precedente
            </p>
        </div>
        <BaseChart type="bar" :data="chartData" :options="chartOptions" height="300" />
    </BaseCard>
</template>
