<script setup>
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Dialog from 'primevue/dialog';
import { IconField, InputIcon, Message } from 'primevue';
import { ref } from 'vue';
import { useDarkMode } from '@/Composables/useDarkMode';
import { Head, useForm } from '@inertiajs/vue3';
useDarkMode();

const visible = ref(false);

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login.store'));
};
</script>

<template>
    <Head title="Login" />
    <div
        class="flex h-screen items-center justify-center bg-surface-50 px-6 py-20 md:px-20 lg:px-80 dark:bg-surface-950"
    >
        <div
            class="flex w-full max-w-md flex-col items-start gap-8 rounded-3xl bg-surface-0 p-12 shadow-[0px_24px_48px_0px_rgba(0,0,0,0.04)] dark:bg-surface-900"
        >
            <div class="flex w-full flex-col items-center gap-6">
                <img src="/public/logo_crslaghi.svg" style="height: 5rem" alt="Logo" />
                <h1 class="w-full text-center text-2xl leading-tight font-medium text-surface-900 dark:text-surface-0">
                    Bentornato
                </h1>
            </div>
            <div class="flex w-full items-center gap-4">
                <Button
                    label="Login con Microsoft"
                    outlined
                    icon="pi pi-microsoft text-base! leading-none! text-blue-600"
                    severity="secondary"
                    class="flex-1! py-2! text-surface-900! dark:text-surface-0!"
                />
            </div>
            <div class="flex w-full items-center gap-2">
                <div class="h-px flex-1 bg-surface-200 dark:bg-surface-800" />
                <div class="font-bold text-surface-700 dark:text-surface-300">oppure</div>
                <div class="h-px flex-1 bg-surface-200 dark:bg-surface-800" />
            </div>
            <Message v-if="'email' in form.errors" closable class="w-full" severity="error">
                Credenziali errate
            </Message>
            <form class="flex w-full flex-col gap-6" @submit.prevent="submit">
                <div class="flex flex-col gap-2">
                    <label for="email" class="font-medium text-surface-900 dark:text-surface-0">Email</label>
                    <InputText
                        id="email"
                        v-model="form.email"
                        placeholder="Email"
                        class="p-3 shadow-sm dark:bg-surface-900!"
                        :invalid="'email' in form.errors"
                    />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="password" class="font-medium text-surface-900 dark:text-surface-0">Password</label>
                    <Password
                        id="password"
                        v-model="form.password"
                        placeholder="Password"
                        :toggleMask="true"
                        :feedback="false"
                        input-class="w-full! dark:bg-surface-900!"
                        :invalid="'email' in form.errors"
                    />
                </div>
                <div
                    class="flex w-full flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-0"
                >
                    <div class="flex items-center gap-2">
                        <Checkbox id="rememberme1" v-model="form.remember" :binary="true" />
                        <label for="rememberme1" class="leading-normal text-surface-900 dark:text-surface-0"
                            >Remember me</label
                        >
                    </div>
                    <Button
                        @click="visible = true"
                        text
                        class="cursor-pointer font-medium text-surface-500 hover:text-surface-600 dark:text-surface-400 dark:hover:text-surface-300"
                        >Password dimenticata?</Button
                    >
                </div>
                <div class="flex w-full flex-col gap-10">
                    <Button
                        type="submit"
                        label="Login"
                        class="w-full"
                        :disabled="form.processing"
                        :loading="form.processing"
                    />
                </div>
            </form>
        </div>

        <Dialog
            v-model:visible="visible"
            append-to="body"
            modal
            :breakpoints="{ '960px': '75vw', '640px': '80vw' }"
            :style="{ width: '40rem' }"
            :draggable="false"
            :resizable="false"
            :show-header="false"
            class="rounded-2xl shadow-sm"
            :pt="{ content: 'p-6!', footer: 'pb-6! px-6!' }"
            :dismissableMask="true"
        >
            <div class="flex flex-col gap-6">
                <div class="flex items-start gap-4">
                    <div class="flex flex-1 flex-col gap-2">
                        <h1 class="m-0 text-xl leading-normal font-semibold text-surface-900 dark:text-surface-0">
                            Recupero Password
                        </h1>
                        <span class="text-base leading-normal text-surface-500 dark:text-surface-400"
                            >Inserisci la tua mail utilizzata per accedere all'account. Se fai il login con Micosoft 365
                            non potrai recuperare la password.</span
                        >
                    </div>
                    <Button
                        icon="pi pi-times"
                        text
                        rounded
                        severity="secondary"
                        class="h-10 w-10 p-2!"
                        @click="visible = false"
                    />
                </div>

                <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-2">
                        <label for="email" class="text-base text-color">E-mail</label>
                        <IconField icon-position="left" class="w-full">
                            <InputIcon class="pi pi-envelope" />
                            <InputText id="email" v-model="email" placeholder="Email" class="w-full" />
                        </IconField>
                    </div>
                </div>

                <div class="flex justify-end gap-4">
                    <Button label="Annulla" outlined @click="visible = false" />
                    <Button label="Continua" @click="visible = false" />
                </div>
            </div>
        </Dialog>
    </div>
</template>
