<script setup>
import { ref, computed, onMounted } from 'vue';
import { ChevronRight } from 'lucide-vue-next';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});

const expandedItems = ref(new Set());

const toggleItem = (title) => {
    if (expandedItems.value.has(title)) {
        expandedItems.value.delete(title);
    } else {
        expandedItems.value.add(title);
    }
};

const isExpanded = (title) => {
    return expandedItems.value.has(title);
};

const handleItemClick = (event, item) => {
    if (item.items && item.items.length) {
        event.preventDefault();
        toggleItem(item.title);
    }
};

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

// Verifica se un item ha un subitem attivo
const hasActiveSubItem = (item) => {
    if (!item.items || !item.items.length) return false;
    return item.items.some((subItem) => isRouteActive(subItem));
};

// Inizializza gli item espansi
onMounted(() => {
    // Espandi automaticamente le sezioni con subitem attivi
    props.items.forEach((item) => {
        if (item.isActive || hasActiveSubItem(item)) {
            expandedItems.value.add(item.title);
        }
    });
});
</script>

<template>
    <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-xs font-semibold tracking-wider text-muted-color uppercase">
            {{ title }}
        </h2>
        <div class="space-y-1">
            <div v-for="item in items" :key="item.title">
                <component
                    :is="item.items && item.items.length ? 'a' : Link"
                    :href="item.items && item.items.length ? '#' : item.url"
                    @click="(e) => handleItemClick(e, item)"
                    class="menu-item-hover group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm text-color"
                    :class="{ 'menu-item-active': hasActiveSubItem(item) || isRouteActive(item) }"
                >
                    <component :is="item.icon" class="h-4 w-4 shrink-0" />
                    <span class="flex-1">{{ item.title }}</span>
                    <ChevronRight
                        v-if="item.items && item.items.length"
                        class="h-4 w-4 transition-transform duration-200"
                        :class="{ 'rotate-90': isExpanded(item.title) }"
                    />
                </component>
                <div
                    v-if="item.items && item.items.length && isExpanded(item.title)"
                    class="mt-1 ml-4 space-y-1 pl-4"
                >
                    <component
                        :is="subItem.inertia === false ? 'a' : Link"
                        v-for="subItem in item.items"
                        :key="subItem.title"
                        :href="subItem.url"
                        class="menu-item-hover block rounded-lg px-3 py-2 text-sm text-muted-color hover:text-color"
                        :class="{ 'menu-item-active': isRouteActive(subItem) }"
                    >
                        {{ subItem.title }}
                    </component>
                </div>
            </div>
        </div>
    </div>
</template>
