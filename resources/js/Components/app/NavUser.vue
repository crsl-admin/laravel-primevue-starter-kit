<script setup>
import { ref } from 'vue';
import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut, Sparkles } from 'lucide-vue-next';
import BaseAvatar from '@/Components/base/BaseAvatar.vue';
import BaseMenu from '@/Components/base/BaseMenu.vue';
import { useSidebar } from '@/Composables/useSidebar';
import { router, usePage } from '@inertiajs/vue3';
const page = usePage();

const { isMobile } = useSidebar();
const menu = ref();

const logout = () => {
    router.post(route('logout'));
};

const menuItems = [
    {
        label: page.props.auth.user.first_name + ' ' + page.props.auth.user.last_name,
        items: [
            {
                label: 'Account',
                icon: 'pi pi-user',
                command: () => router.visit(route('profile.edit')),
            },
            {
                separator: true,
            },
            {
                label: 'Esci',
                icon: 'pi pi-sign-out',
                command: () => logout(),
            },
        ],
    },
];

const toggleMenu = (event) => {
    menu.value?.toggle(event);
};

const getInitials = (name) => {
    return name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
};
</script>

<template>
    <div class="p-3">
        <button
            @click="toggleMenu"
            class="menu-item-hover flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-color hover:cursor-pointer"
        >
            <BaseAvatar
                v-if="$page.props.auth.user.avatar"
                :image="$page.props.avatar"
                size="normal"
                shape="circle"
                class="h-8 w-8"
            />
            <BaseAvatar
                v-else
                :label="getInitials($page.props.auth.user.first_name)"
                size="normal"
                shape="circle"
                class="text-primary-foreground h-8 w-8 bg-primary"
            />
            <div class="flex flex-1 flex-col text-left">
                <span class="truncate font-medium">{{ $page.props.auth.user.first_name }}</span>
                <span class="truncate text-xs text-muted-color">{{ $page.props.auth.user.email }}</span>
            </div>
            <ChevronsUpDown class="ml-auto h-4 w-4 shrink-0" />
        </button>
        <BaseMenu ref="menu" :model="menuItems" popup />
    </div>
</template>
