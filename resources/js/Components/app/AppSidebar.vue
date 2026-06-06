<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import {
    BookOpen,
    Bot,
    Command,
    Frame,
    LifeBuoy,
    Map,
    PieChart,
    Send,
    Settings2,
    SquareTerminal,
    Users,
} from 'lucide-vue-next';
import NavMain from '@/Components/app/NavMain.vue';
import NavProjects from '@/Components/app/NavProjects.vue';
import NavSecondary from '@/Components/app/NavSecondary.vue';
import NavUser from '@/Components/app/NavUser.vue';
import { useSidebar } from '@/Composables/useSidebar';
import Divider from 'primevue/divider';
import { Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';

const props = defineProps({
    variant: {
        type: String,
        default: 'inset',
    },
});

const { isOpen, isMobile, checkMobile, closeSidebar } = useSidebar();
const page = usePage();

const canManageUsers = computed(() => page.props.auth?.can?.manage_users ?? false);

const navSettings = computed(() => {
    const items = [
        {
            title: 'Impostazioni',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'Generale',
                    url: '#',
                    routeName: 'company.*',
                },
                {
                    title: 'Team',
                    url: '#',
                    routeName: 'job-titles.*',
                },
                {
                    title: 'Fatturazione',
                    url: '#',
                    routeName: 'branches.*',
                },
                {
                    title: 'Limiti',
                    url: '#',
                    routeName: 'provinces.*',
                },
            ],
        },
    ];

    if (canManageUsers.value) {
        items.push({
            title: 'Gestione Utenti',
            url: route('users.index'),
            routeName: 'users.*',
            icon: Users,
        });
    }

    return items;
});

const data = {
    navMain: [
        {
            title: 'Dashboard',
            url: route('dashboard'),
            routeName: 'dashboard',
            icon: Command,
        },
        {
            title: 'AI',
            url: '#',
            icon: SquareTerminal,
            routeName: 'contracts.*',
        },
        {
            title: 'Models',
            url: '#',
            icon: Bot,
            items: [
                {
                    title: 'Genesis',
                    url: '#',
                    routeName: 'genesis',
                },
                {
                    title: 'Explorer',
                    url: '#',
                },
                {
                    title: 'Quantum',
                    url: '#',
                },
            ],
        },
        {
            title: 'Documentation',
            url: '#',
            icon: BookOpen,
            items: [
                {
                    title: 'Introduction',
                    url: '#',
                },
                {
                    title: 'Get Started',
                    url: '#',
                },
                {
                    title: 'Tutorials',
                    url: '#',
                },
                {
                    title: 'Changelog',
                    url: '#',
                },
            ],
        },
        {
            title: 'Settings',
            url: '#',
            icon: Settings2,
            items: [
                {
                    title: 'General',
                    url: '#',
                },
                {
                    title: 'Team',
                    url: '#',
                },
                {
                    title: 'Billing',
                    url: '#',
                },
                {
                    title: 'Limits',
                    url: '#',
                },
            ],
        },
    ],
    navSecondary: [
        {
            title: 'Support',
            url: 'mailto:support@example.com',
            icon: LifeBuoy,
            inertia: false,
        },
        /*{
            title: 'Feedback',
            url: route('test'),
            routeName: 'test',
            icon: Send,
        },*/
    ],
    projects: [
        {
            name: 'Design Engineering',
            url: '#',
            icon: Frame,
        },
        {
            name: 'Sales & Marketing',
            url: '#',
            icon: PieChart,
        },
        {
            name: 'Travel',
            url: '#',
            icon: Map,
        },
    ],
};

onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
});

const handleOverlayClick = () => {
    if (isMobile.value) {
        closeSidebar();
    }
};
</script>

<template>
    <aside
        class="fixed inset-y-0 left-0 z-50 flex flex-col transition-transform duration-300 bg-[#FAFAFA] dark:bg-surface-800"
        :class="{
            'w-64': isOpen,
            'w-0 -translate-x-full': !isOpen,
        }"
    >
        <!-- Header -->
        <div class="flex h-16 items-center px-4">
            <Link :href="route('dashboard')" v-if="isOpen" class="flex items-center gap-2">
                <img src="/public/logo_crslaghi.svg" alt="Logo" class="h-12 w-44 invert dark:hidden" />
                <img src="/public/logo_crslaghi.svg" alt="Logo" class="h-44 w-44 hidden dark:block" />
            </Link>
        </div>

        <!-- Content -->
        <div v-if="isOpen" class="flex-1 overflow-y-auto">
            <NavMain :items="data.navMain" title="Principale" />
            <Divider />
            <NavMain :items="navSettings" title="Impostazioni" />
            <Divider />
            <!-- <NavProjects :projects="data.projects" />
            <Divider />-->
            <NavSecondary :items="data.navSecondary" />
        </div>

        <!-- Footer -->
        <div v-if="isOpen">
            <NavUser />
        </div>
    </aside>

    <!-- Mobile Overlay -->
    <div v-if="isMobile && isOpen" @click="handleOverlayClick" class="fixed inset-0 z-40 bg-black/50 md:hidden" />
</template>
