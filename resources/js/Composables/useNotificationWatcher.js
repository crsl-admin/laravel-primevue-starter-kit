import { useToast } from 'primevue/usetoast';
import { usePage } from '@inertiajs/vue3';
import { watch } from 'vue';

export function useNotificationWatcher() {
    const toast = useToast();
    const page = usePage();

    // Watcher per le notifiche
    const watchForNotifications = () => {
        watch(
            () => page.props.notification,
            (notification) => {
                if (notification?.body && notification?.type) {
                    toast.add({
                        severity: notification.type,
                        summary: notification.body,
                        // detail: notification.body,
                        life: 3000,
                    });
                }
            },
            { immediate: true },
        );
    };

    return {
        watchForNotifications,
    };
}
