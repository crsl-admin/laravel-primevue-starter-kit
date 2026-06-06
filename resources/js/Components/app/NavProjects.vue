<script setup>
import { ref } from 'vue';
import { MoreHorizontal, Folder, Forward, Trash2 } from 'lucide-vue-next';
import BaseMenu from '@/Components/base/CMenu.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    projects: {
        type: Array,
        required: true,
    },
});

const menuRefs = ref({});

const getMenuItems = () => [
    {
        label: 'View Project',
        icon: 'pi pi-folder',
        command: () => console.log('View project'),
    },
    {
        label: 'Share Project',
        icon: 'pi pi-share-alt',
        command: () => console.log('Share project'),
    },
    {
        separator: true,
    },
    {
        label: 'Delete Project',
        icon: 'pi pi-trash',
        command: () => console.log('Delete project'),
    },
];

const toggleMenu = (event, index) => {
    menuRefs.value[index]?.toggle(event);
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
</script>

<template>
    <div class="px-3 py-2">
        <h2 class="mb-2 px-4 text-xs font-semibold tracking-wider text-muted-color uppercase">Projects</h2>
        <div class="space-y-1">
            <div
                v-for="(project, index) in projects"
                :key="project.name"
                class="menu-item-hover group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-color"
                :class="{ 'menu-item-active': isRouteActive(project) }"
            >
                <component
                    :is="project.inertia === false ? 'a' : Link"
                    :href="project.url"
                    class="flex flex-1 items-center gap-3"
                >
                    <component :is="project.icon" class="h-4 w-4 shrink-0" />
                    <span>{{ project.name }}</span>
                </component>
                <button
                    @click="toggleMenu($event, index)"
                    class="hover:bg-accent/50 rounded p-1 opacity-0 transition-opacity group-hover:opacity-100"
                >
                    <MoreHorizontal class="h-4 w-4" />
                </button>
                <BaseMenu :ref="(el) => (menuRefs[index] = el)" :model="getMenuItems()" popup />
            </div>
            <button
                class="hover:surface-hover flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-color transition-all"
            >
                <MoreHorizontal class="h-4 w-4 shrink-0" />
                <span>More</span>
            </button>
        </div>
    </div>
</template>
