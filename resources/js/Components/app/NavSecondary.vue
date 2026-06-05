<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
});

// Verifica se un item/URL corrisponde alla rotta corrente
const isRouteActive = (item) => {
    // Se item è una stringa (URL), gestiamo la retrocompatibilità
    const url = typeof item === 'string' ? item : item?.url;
    const routeName = typeof item === 'object' ? item?.routeName : null;

    if (!url && !routeName) return false;

    // Se c'è un routeName esplicito, usalo
    if (routeName) {
        try {
            return route().current(routeName);
        } catch (e) {
            return false;
        }
    }

    // Se è un link esterno (http, mailto, etc.), non è mai attivo
    if (url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('#')) {
        return false;
    }

    // Prova a usare l'URL come nome di rotta
    try {
        return route().current(url);
    } catch (e) {
        // Se fallisce, prova a fare match con il path corrente
        try {
            const currentPath = window.location.pathname;
            return currentPath === url || currentPath.startsWith(url + '/');
        } catch (err) {
            return false;
        }
    }
};
</script>

<template>
    <div class="mt-auto px-3 py-2">
        <div class="space-y-1">
            <component
                :is="item.inertia === false ? 'a' : Link"
                v-for="item in items"
                :key="item.title"
                :href="item.url"
                class="menu-item-hover flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-color"
                :class="{ 'menu-item-active': isRouteActive(item) }"
            >
                <component :is="item.icon" class="h-4 w-4 shrink-0" />
                <span>{{ item.title }}</span>
            </component>
        </div>
    </div>
</template>
