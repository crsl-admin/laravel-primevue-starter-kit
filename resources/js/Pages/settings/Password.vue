<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Divider from 'primevue/divider';
import ProfileTabs from '@/Components/profile/ProfileTabs.vue';
import PasswordForm from '@/Components/profile/PasswordForm.vue';

const props = defineProps({
    user: Object,
});

const breadcrumbItems = [
    {
        label: 'Impostazioni Profilo',
        url: '#',
    },
    {
        label: 'Password',
    },
];
</script>

<template>
    <AppLayout :breadcrumb-items="breadcrumbItems" title="Sicurezza">
        <div class="flex flex-auto flex-col bg-surface-950">
            <div class="flex-auto bg-surface-0 px-8 py-6 lg:px-20 lg:py-8 dark:bg-surface-900">
                <div class="flex w-full flex-col gap-2 pb-8">
                    <h2 class="mt-0 text-2xl leading-tight font-medium text-surface-900 dark:text-surface-0">
                        Impostazioni Account
                    </h2>
                    <p class="mt-0 leading-tight text-surface-500 dark:text-surface-300">Gestisci il tuo account</p>
                </div>

                <Divider />

                <div class="grid grid-cols-12 gap-4 py-6 lg:py-8">
                    <div class="col-span-12 lg:col-span-2">
                        <ProfileTabs current-tab="password" />
                    </div>

                    <div class="col-span-12 lg:col-span-10 xl:col-span-10">
                        <PasswordForm />
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
