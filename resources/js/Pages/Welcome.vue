<script setup>
import { Head, Link } from '@inertiajs/vue3';

import {
    Server,
    Layers,
    Palette,
    Component,
    Zap,
    CheckCircle2
} from 'lucide-vue-next';
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
    <AppLayout title="Benvenuto">
        <div class="p-4 sm:p-8 max-w-7xl mx-auto selection:bg-primary selection:text-white">
            <!-- Hero Section -->
            <section class="relative rounded-3xl overflow-hidden bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 shadow-sm mb-12 animate-fade-in">
                <!-- Background Decoration -->
                <div class="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                    <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[100px] rounded-full opacity-60"></div>
                    <div class="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full opacity-60"></div>
                </div>

                <div class="px-6 py-16 sm:px-12 sm:py-24 text-center">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-8 shadow-sm border border-primary/20">
                        <Zap :size="14" />
                        <span>READY FOR PRODUCTION</span>
                    </div>

                    <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-linear-to-br from-surface-900 to-surface-500 dark:from-surface-0 dark:to-surface-400 bg-clip-text text-transparent">
                        Sviluppo Moderno,<br/>Senza Compromessi.
                    </h1>

                    <p class="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Un punto di partenza solido per le tue applicazioni web, integrando le tecnologie più amate dagli sviluppatori in un unico ecosistema armonioso.
                    </p>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link :href="'/dashboard'">
                            <Button label="Inizia Ora" icon="pi pi-rocket" size="large" />
                        </Link>
                        <Button label="Documentazione" icon="pi pi-book" size="large" outlined severity="secondary" />
                    </div>
                </div>
            </section>

            <!-- Tech Stack Grid -->
            <section class="mb-12">
                <div class="text-center mb-10">
                    <h2 class="text-2xl font-bold mb-2 text-surface-900 dark:text-surface-0">Potenziato da tecnologie leader</h2>
                    <p class="text-surface-500 dark:text-surface-400">Architettura moderna pensata per prestazioni e scalabilità.</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="tech in techStack" :key="tech.name" class="p-6 rounded-2xl border border-surface-200 dark:border-surface-800 bg-surface-0 dark:bg-surface-900 hover:shadow-lg hover:border-primary/30 transition-all group">
                        <div :class="[tech.bg, tech.color, 'w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm']">
                            <component :is="tech.icon" :size="24" />
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-surface-900 dark:text-surface-0">{{ tech.name }}</h3>
                        <p class="text-surface-500 dark:text-surface-400 text-sm leading-relaxed">
                            {{ tech.description }}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="rounded-3xl bg-surface-0 dark:bg-surface-900 border border-surface-200 dark:border-surface-800 overflow-hidden shadow-sm">
                <div class="flex flex-col lg:flex-row items-stretch">
                    <div class="flex-1 p-8 sm:p-12">
                        <h2 class="text-3xl font-bold mb-8 leading-tight text-surface-900 dark:text-surface-0">Perché scegliere questo boilerplate?</h2>
                        <div class="space-y-8">
                            <div class="flex gap-4">
                                <div class="mt-1 bg-green-500/10 text-green-500 p-1.5 rounded-lg h-fit">
                                    <CheckCircle2 :size="18" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-surface-900 dark:text-surface-0">Full Stack Perfection</h4>
                                    <p class="text-surface-500 dark:text-surface-400 text-sm">Inertia.js collega Laravel e Vue senza la complessità delle API REST.</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="mt-1 bg-green-500/10 text-green-500 p-1.5 rounded-lg h-fit">
                                    <CheckCircle2 :size="18" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-surface-900 dark:text-surface-0">UI Kit Professionale</h4>
                                    <p class="text-surface-500 dark:text-surface-400 text-sm">Componenti PrimeVue pronti all'uso e altamente personalizzabili.</p>
                                </div>
                            </div>
                            <div class="flex gap-4">
                                <div class="mt-1 bg-green-500/10 text-green-500 p-1.5 rounded-lg h-fit">
                                    <CheckCircle2 :size="18" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-surface-900 dark:text-surface-0">Dark Mode Nativa</h4>
                                    <p class="text-surface-500 dark:text-surface-400 text-sm">Supporto integrato per temi che si adatta alle tue preferenze.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 min-h-[300px] bg-gradient-to-tr from-primary to-emerald-600 flex items-center justify-center p-12">
                        <img src="/public/logo_crslaghi.svg" class="w-full max-w-[200px] drop-shadow-2xl brightness-0 invert" alt="CRS Laghi" />
                    </div>
                </div>
            </section>

            <!-- Footer-ish info -->
            <div class="mt-12 py-8 border-t border-surface-200 dark:border-surface-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-surface-400 text-xs">
                <p>© 2026 CRS Laghi. Tutti i diritti riservati.</p>
                <div class="flex gap-6 uppercase tracking-widest opacity-60">
                    <span>Laravel v{{ laravelVersion }}</span>
                    <span>PHP v{{ phpVersion }}</span>
                </div>
            </div>
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
