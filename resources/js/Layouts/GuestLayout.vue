<script setup>
import { useDarkMode } from '@/Composables/useDarkMode';
import Toast from 'primevue/toast';

useDarkMode();
</script>
<template>
    <div class="surface-ground flex min-h-screen items-center justify-center p-6 md:p-10">
        <div class="w-full max-w-sm md:max-w-4xl">
            <slot />
        </div>
        <Toast />
    </div>
</template>
