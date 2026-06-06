<script setup>
import { Link, router } from '@inertiajs/vue3';

const props = defineProps({
    currentTab: {
        type: String,
        required: true,
    },
});

const tabs = [
    {
        name: 'Profilo',
        key: 'profile',
        icon: 'pi pi-user',
        route: 'profile.edit',
    },
    {
        name: 'Password',
        key: 'password',
        icon: 'pi pi-lock',
        route: 'password.edit',
    },
];

const navigateToTab = (routeName) => {
    router.visit(route(routeName));
};
</script>

<template>
    <!-- Desktop Navigation -->
    <ul class="m-0 hidden list-none flex-col justify-start p-0 lg:flex">
        <li
            v-for="tab in tabs"
            :key="tab.key"
            class="-ml-0.5 border-l-2 transition-colors"
            :class="{
                'border-primary': currentTab === tab.key,
                'border-surface-200 hover:border-primary dark:border-surface-700': currentTab !== tab.key,
            }"
        >
            <Link
                :href="route(tab.route)"
                class="flex cursor-pointer items-center px-4 py-3 font-medium transition-colors"
                :class="{
                    'text-primary': currentTab === tab.key,
                    'text-surface-700 hover:text-primary dark:text-surface-200': currentTab !== tab.key,
                }"
            >
                <i :class="[tab.icon, 'mr-2', 'text-base!', 'leading-normal!']" />
                <span>{{ tab.name }}</span>
            </Link>
        </li>
    </ul>

    <!-- Mobile Navigation -->
    <div class="lg:hidden">
        <div class="overflow-x-auto border-b border-surface-200 dark:border-surface-700">
            <ul class="m-0 flex list-none flex-row justify-start p-0 whitespace-nowrap">
                <li
                    v-for="tab in tabs"
                    :key="tab.key"
                    class="relative px-4 py-3 transition-colors"
                    :class="{
                        'text-primary': currentTab === tab.key,
                        'text-surface-700 hover:text-primary dark:text-surface-200': currentTab !== tab.key,
                    }"
                >
                    <a @click="navigateToTab(tab.route)" class="flex cursor-pointer items-center font-medium">
                        <i :class="[tab.icon, 'mr-2', 'text-base!', 'leading-normal!']" />
                        <span>{{ tab.name }}</span>
                    </a>
                    <div
                        class="absolute right-0 bottom-0 left-0 h-0.5 transition-colors"
                        :class="{
                            'bg-primary': currentTab === tab.key,
                            'bg-surface-200 dark:bg-surface-700': currentTab !== tab.key,
                        }"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>
