<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { useDarkMode } from '@/Composables/useDarkMode';

import {
    Server,
    Layers,
    Palette,
    Component,
    Moon,
    Sun,
    Zap,
    CheckCircle2
} from 'lucide-vue-next';
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';
import AppLayout from "@/Layouts/AppLayout.vue";

defineProps({
    canLogin: {
        type: Boolean,
        default: true
    },
    canRegister: {
        type: Boolean,
        default: true
    },
    laravelVersion: {
        type: String,
        default: '11.x'
    },
    phpVersion: {
        type: String,
        default: '8.3'
    },
});

const { isDark, toggleDarkMode } = useDarkMode();

/*const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    if (isDark.value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};*/

onMounted(() => {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true;
        document.documentElement.classList.add('dark');
    } else {
        isDark.value = false;
        document.documentElement.classList.remove('dark');
    }
});

const techStack = [
    {
        name: 'Laravel',
        description: 'Il framework PHP per artigiani del web, potente e scalabile.',
        icon: Server,
        color: 'text-red-500',
        bg: 'bg-red-500/10'
    },
    {
        name: 'Vue.js',
        description: 'Framework progressivo per interfacce utente reattive e moderne.',
        icon: Layers,
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10'
    },
    {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework per design rapidi e personalizzati.',
        icon: Palette,
        color: 'text-sky-500',
        bg: 'bg-sky-500/10'
    },
    {
        name: 'PrimeVue',
        description: 'La libreria di componenti UI più completa per l\'ecosistema Vue.',
        icon: Component,
        color: 'text-primary',
        bg: 'bg-primary/10'
    }
];
</script>

<template>
    <Head title="Welcome" />
    <AppLayout>
        <div class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-primary selection:text-white">
        <!-- Navigation -->
        <nav class="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <div class="flex items-center gap-2">
                        <img src="/public/logo_crslaghi.svg" class="h-10 w-auto" alt="CRS Laghi Logo" />
                        <span class="font-bold text-xl tracking-tight hidden sm:block italic">Boilerplate</span>
                    </div>

                    <div class="flex items-center gap-4">
                        <Button
                            @click="toggleDarkMode"
                            rounded
                            text
                            severity="secondary"
                            class="!p-2"
                        >
                            <Sun v-if="isDark" :size="20" />
                            <Moon v-else :size="20" />
                        </Button>

                        <div v-if="canLogin" class="hidden sm:flex items-center gap-4 ml-2 border-l border-slate-200 dark:border-slate-800 pl-4">
                            <Link v-if="$page.props.auth?.user" :href="'/dashboard'" class="text-sm font-semibold hover:text-primary transition-colors">
                                Dashboard
                            </Link>
                            <template v-else>
                                <Link :href="'/login'" class="text-sm font-semibold hover:text-primary transition-colors">
                                    Accedi
                                </Link>
                                <Link v-if="canRegister" :href="'/register'" class="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow-sm">
                                    Registrati
                                </Link>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <main>
            <section class="relative pt-20 pb-32 overflow-hidden">
                <!-- Background Decoration -->
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
                    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full opacity-50"></div>
                    <div class="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/20 blur-[120px] rounded-full opacity-50"></div>
                </div>

                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 animate-fade-in shadow-sm border border-primary/20">
                        <Zap :size="14" />
                        <span>READY FOR PRODUCTION</span>
                    </div>

                    <h1 class="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                        Sviluppo Moderno,<br/>Senza Compromessi.
                    </h1>

                    <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Un punto di partenza solido per le tue applicazioni web, integrando le tecnologie più amate dagli sviluppatori in un unico ecosistema armonioso.
                    </p>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button label="Inizia Ora" icon="pi pi-rocket" size="large" />
                        <Button label="Documentazione" icon="pi pi-book" size="large" outlined severity="secondary" />
                    </div>
                </div>
            </section>

            <!-- Tech Stack Grid -->
            <section class="py-24 bg-white dark:bg-slate-900/30">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl font-bold mb-4">Potenziato da tecnologie leader</h2>
                        <p class="text-slate-500 dark:text-slate-400">Architettura moderna pensata per prestazioni, scalabilità e manutenibilità.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div v-for="tech in techStack" :key="tech.name" class="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:border-primary/50 transition-all group">
                            <div :class="[tech.bg, tech.color, 'w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm']">
                                <component :is="tech.icon" :size="24" />
                            </div>
                            <h3 class="text-xl font-bold mb-3">{{ tech.name }}</h3>
                            <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                {{ tech.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="py-24">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col lg:flex-row items-center gap-16">
                        <div class="flex-1">
                            <h2 class="text-4xl font-bold mb-6 leading-tight">Perché scegliere questo boilerplate?</h2>
                            <div class="space-y-6">
                                <div class="flex gap-4">
                                    <div class="mt-1 bg-green-500/10 text-green-500 p-1.5 rounded-lg h-fit">
                                        <CheckCircle2 :size="18" />
                                    </div>
                                    <div>
                                        <h4 class="font-bold">Full Stack Perfection</h4>
                                        <p class="text-slate-500 dark:text-slate-400 text-sm">Inertia.js collega il backend Laravel con il frontend Vue senza la complessità delle API REST, offrendo un'esperienza SPA nativa.</p>
                                    </div>
                                </div>
                                <div class="flex gap-4">
                                    <div class="mt-1 bg-green-500/10 text-green-500 p-1.5 rounded-lg h-fit">
                                        <CheckCircle2 :size="18" />
                                    </div>
                                    <div>
                                        <h4 class="font-bold">UI Kit Professionale</h4>
                                        <p class="text-slate-500 dark:text-slate-400 text-sm">Accesso a decine di componenti PrimeVue pronti all'uso, accessibili e altamente personalizzabili con Tailwind CSS.</p>
                                    </div>
                                </div>
                                <div class="flex gap-4">
                                    <div class="mt-1 bg-green-500/10 text-green-500 p-1.5 rounded-lg h-fit">
                                        <CheckCircle2 :size="18" />
                                    </div>
                                    <div>
                                        <h4 class="font-bold">Dark Mode Nativa</h4>
                                        <p class="text-slate-500 dark:text-slate-400 text-sm">Supporto integrato per temi chiari e scuri che si adatta alle preferenze dell'utente e del sistema operativo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 relative">
                             <div class="aspect-video bg-gradient-to-tr from-primary to-emerald-600 rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center p-12">
                                <img src="/public/logo_crslaghi.svg" class="w-full max-w-[200px] drop-shadow-2xl brightness-0 invert" alt="CRS Laghi" />
                             </div>
                             <!-- Decorative elements -->
                             <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
                             <div class="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer -->
        <footer class="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div class="flex flex-col items-center md:items-start gap-4">
                        <div class="flex items-center gap-2">
                            <img src="/public/logo_crslaghi.svg" class="h-8 w-auto" alt="Logo" />
                            <span class="font-bold text-lg">Boilerplate</span>
                        </div>
                        <p class="text-sm text-slate-500 dark:text-slate-400 max-w-xs text-center md:text-left">
                            Una soluzione professionale di CRS Laghi per lo sviluppo rapido di applicazioni web.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div class="flex flex-col gap-3">
                            <span class="font-bold text-sm uppercase tracking-wider text-slate-400">Tech</span>
                            <a href="https://laravel.com" target="_blank" class="text-sm text-slate-500 hover:text-primary transition-colors">Laravel</a>
                            <a href="https://vuejs.org" target="_blank" class="text-sm text-slate-500 hover:text-primary transition-colors">Vue.js</a>
                        </div>
                        <div class="flex flex-col gap-3">
                            <span class="font-bold text-sm uppercase tracking-wider text-slate-400">UI</span>
                            <a href="https://tailwindcss.com" target="_blank" class="text-sm text-slate-500 hover:text-primary transition-colors">Tailwind</a>
                            <a href="https://primevue.org" target="_blank" class="text-sm text-slate-500 hover:text-primary transition-colors">PrimeVue</a>
                        </div>
                        <div class="flex flex-col gap-3">
                            <span class="font-bold text-sm uppercase tracking-wider text-slate-400">Risorse</span>
                            <a href="#" class="text-sm text-slate-500 hover:text-primary transition-colors">Docs</a>
                            <a href="#" class="text-sm text-slate-500 hover:text-primary transition-colors">GitHub</a>
                        </div>
                    </div>
                </div>

                <div class="mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p class="text-xs text-slate-400">
                        © 2026 CRS Laghi. Tutti i diritti riservati.
                    </p>
                    <div class="flex gap-6">
                        <span class="text-[10px] text-slate-400 uppercase tracking-tighter">Laravel v{{ laravelVersion }}</span>
                        <span class="text-[10px] text-slate-400 uppercase tracking-tighter">PHP v{{ phpVersion }}</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </AppLayout>
</template>

<style>
@keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fade-in 0.6s ease-out forwards;
}
</style>
