<script setup>
import { onMounted } from 'vue';
import { useSidebar } from '@/Composables/useSidebar';
import AppSidebar from '@/Components/app/AppSidebar.vue';
import AppHeader from '@/Components/app/AppHeader.vue';
import { useNotificationWatcher } from '@/Composables/useNotificationWatcher.js';
import Toast from 'primevue/toast';
import { Head } from '@inertiajs/vue3';

defineProps({
    title: {
        type: String,
        default: 'Dashboard',
    },
    breadcrumbItems: {
        type: Array,
        default: () => [],
    },
});

const { isOpen } = useSidebar();
const { watchForNotifications } = useNotificationWatcher();

onMounted(() => {
    watchForNotifications();
});
</script>

<template>
    <Head :title="title" />
    <div class="surface-content min-h-screen bg-surface-0 dark:bg-surface-900">
        <AppSidebar />
        <div
            class="transition-all duration-300"
            :class="{
                'ml-64': isOpen,
            }"
        >
            <AppHeader :breadcrumb-items="breadcrumbItems" />
            <slot />
        </div>
        <Toast />
    </div>
</template>
