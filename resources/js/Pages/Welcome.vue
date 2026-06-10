<script setup>
import { Head, Link } from '@inertiajs/vue3';

import { Server, Layers, Palette, Component, Zap, CheckCircle2 } from 'lucide-vue-next';
import Button from 'primevue/button';
import AppLayout from '@/Layouts/AppLayout.vue';

defineProps({
    canLogin: {
        type: Boolean,
        default: true,
    },
    canRegister: {
        type: Boolean,
        default: true,
    },
    laravelVersion: {
        type: String,
        default: '11.x',
    },
    phpVersion: {
        type: String,
        default: '8.3',
    },
});

const techStack = [
    {
        name: 'Laravel',
        description: 'The PHP framework for web artisans, powerful and scalable.',
        icon: Server,
        color: 'text-red-500',
        bg: 'bg-red-500/10',
    },
    {
        name: 'Vue.js',
        description: 'Progressive framework for building modern, reactive user interfaces.',
        icon: Layers,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10',
    },
    {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid, custom designs.',
        icon: Palette,
        color: 'text-sky-500',
        bg: 'bg-sky-500/10',
    },
    {
        name: 'PrimeVue',
        description: 'The most complete UI component library for the Vue ecosystem.',
        icon: Component,
        color: 'text-primary',
        bg: 'bg-primary/10',
    },
];
</script>

<template>
    <AppLayout title="Welcome">
        <div class="mx-auto max-w-7xl p-4 selection:bg-primary selection:text-white sm:p-8">
            <!-- Hero Section -->
            <section
                class="animate-fade-in relative mb-12 overflow-hidden rounded-3xl border border-surface-200 bg-surface-0 shadow-sm dark:border-surface-800 dark:bg-surface-900"
            >
                <!-- Background Decoration -->
                <div
                    class="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full overflow-hidden"
                >
                    <div
                        class="absolute top-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full bg-primary/10 opacity-60 blur-[100px]"
                    ></div>
                    <div
                        class="absolute right-[-10%] bottom-[-20%] h-[40%] w-[40%] rounded-full bg-blue-500/10 opacity-60 blur-[100px]"
                    ></div>
                </div>

                <div class="px-6 py-16 text-center sm:px-12 sm:py-24">
                    <div
                        class="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold text-primary shadow-sm"
                    >
                        <Zap :size="14" />
                        <span>READY FOR PRODUCTION</span>
                    </div>

                    <h1
                        class="mb-6 bg-linear-to-br from-surface-900 to-surface-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl dark:from-surface-0 dark:to-surface-400"
                    >
                        Modern Development,<br />Without Compromise.
                    </h1>

                    <p
                        class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-surface-600 dark:text-surface-400"
                    >
                        A solid foundation for your web applications, integrating the technologies
                        loved by developers into a single, harmonious ecosystem.
                    </p>

                    <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link :href="route('dashboard')">
                            <Button label="Get Started" icon="pi pi-rocket" size="large" />
                        </Link>
                    </div>
                </div>
            </section>

            <!-- Tech Stack Grid -->
            <section class="mb-12">
                <div class="mb-10 text-center">
                    <h2 class="mb-2 text-2xl font-bold text-surface-900 dark:text-surface-0">
                        Powered by leading technologies
                    </h2>
                    <p class="text-surface-500 dark:text-surface-400">
                        Modern architecture designed for performance and scalability.
                    </p>
                </div>

                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="tech in techStack"
                        :key="tech.name"
                        class="group rounded-2xl border border-surface-200 bg-surface-0 p-6 transition-all hover:border-primary/30 hover:shadow-lg dark:border-surface-800 dark:bg-surface-900"
                    >
                        <div
                            :class="[
                                tech.bg,
                                tech.color,
                                'mb-6 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform group-hover:scale-110',
                            ]"
                        >
                            <component :is="tech.icon" :size="24" />
                        </div>
                        <h3 class="mb-3 text-xl font-bold text-surface-900 dark:text-surface-0">
                            {{ tech.name }}
                        </h3>
                        <p class="text-sm leading-relaxed text-surface-500 dark:text-surface-400">
                            {{ tech.description }}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section
                class="overflow-hidden rounded-3xl border border-surface-200 bg-surface-0 shadow-sm dark:border-surface-800 dark:bg-surface-900"
            >
                <div class="flex flex-col items-stretch lg:flex-row">
                    <div class="flex-1 p-8 sm:p-12">
                        <h2
                            class="mb-8 text-3xl leading-tight font-bold text-surface-900 dark:text-surface-0"
                        >
                            Why choose this boilerplate?
                        </h2>
                        <div class="space-y-8">
                            <div class="flex gap-4">
                                <div
                                    class="mt-1 h-fit rounded-lg bg-green-500/10 p-1.5 text-green-500"
                                >
                                    <CheckCircle2 :size="18" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-surface-900 dark:text-surface-0">
                                        Full Stack Perfection
                                    </h4>
                                    <p class="text-sm text-surface-500 dark:text-surface-400">
                                        Inertia.js connects Laravel and Vue without the complexity
                                        of REST APIs.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div
                                    class="mt-1 h-fit rounded-lg bg-green-500/10 p-1.5 text-green-500"
                                >
                                    <CheckCircle2 :size="18" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-surface-900 dark:text-surface-0">
                                        Professional UI Kit
                                    </h4>
                                    <p class="text-sm text-surface-500 dark:text-surface-400">
                                        Ready-to-use PrimeVue components that are highly
                                        customizable.
                                    </p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div
                                    class="mt-1 h-fit rounded-lg bg-green-500/10 p-1.5 text-green-500"
                                >
                                    <CheckCircle2 :size="18" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-surface-900 dark:text-surface-0">
                                        Native Dark Mode
                                    </h4>
                                    <p class="text-sm text-surface-500 dark:text-surface-400">
                                        Built-in theme support that adapts to your preferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="flex min-h-[300px] flex-1 items-center justify-center bg-gradient-to-tr from-primary to-emerald-600 p-12"
                    >
                        <img
                            src="/public/logo_crslaghi.svg"
                            class="w-full max-w-[200px] brightness-0 drop-shadow-2xl invert"
                            alt="CRS Laghi"
                        />
                    </div>
                </div>
            </section>

            <!-- Footer-ish info -->
            <div
                class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-200 py-8 text-xs text-surface-400 sm:flex-row dark:border-surface-800"
            >
                <p>© 2026 CRS Laghi. All rights reserved.</p>
                <div class="flex gap-6 tracking-widest uppercase opacity-60">
                    <span>Laravel v{{ laravelVersion }}</span>
                    <span>PHP v{{ phpVersion }}</span>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<style>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
}
</style>
