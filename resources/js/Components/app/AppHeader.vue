<script setup>
import { Menu, Moon, Sun } from 'lucide-vue-next';
import BaseBreadcrumb from '@/Components/base/CBreadcrumb.vue';
import BaseDivider from '@/Components/base/CDivider.vue';
import BaseButton from '@/Components/base/CButton.vue';
import { useSidebar } from '@/Composables/useSidebar';
import { useDarkMode } from '@/Composables/useDarkMode';

defineProps({
    breadcrumbItems: {
        type: Array,
        default: () => [],
    },
});

const { toggleSidebar } = useSidebar();
const { isDark, toggleDarkMode } = useDarkMode();
</script>

<template>
    <header class="surface-border surface-sidebar flex h-16 shrink-0 items-center gap-2">
        <div class="flex flex-1 items-center gap-2 px-4">
            <BaseButton text rounded @click="toggleSidebar" class="-ml-1 p-2">
                <template #default>
                    <Menu class="h-5 w-5" />
                </template>
            </BaseButton>

            <BaseDivider layout="vertical" class="mx-2 h-4" />

            <BaseBreadcrumb v-if="breadcrumbItems.length" :items="breadcrumbItems" class="hidden md:flex" />
        </div>

        <!-- Dark Mode Toggle -->
        <div class="px-4">
            <BaseButton text rounded @click="toggleDarkMode" class="p-2">
                <template #default>
                    <Sun v-if="isDark" class="h-5 w-5" />
                    <Moon v-else class="h-5 w-5" />
                </template>
            </BaseButton>
        </div>
    </header>
</template>
