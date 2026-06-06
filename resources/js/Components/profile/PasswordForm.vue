<script setup>
import { useForm } from '@inertiajs/vue3';
import Password from 'primevue/password';
import Button from 'primevue/button';

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const updatePassword = () => {
    form.put(route('password-update'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <div class="flex-auto rounded-2xl bg-surface-0 p-8 dark:bg-surface-900">
        <div class="flex flex-col gap-8">
            <div class="text-lg leading-tight font-semibold text-surface-900 dark:text-surface-0">
                Modifica Password
            </div>

            <form class="flex flex-col gap-12" @submit.prevent="updatePassword">
                <div class="flex max-w-xl flex-col gap-6">
                    <div class="flex flex-col gap-2">
                        <label for="current_password" class="text-surface-900 dark:text-surface-0">
                            Password Attuale
                        </label>
                        <Password
                            fluid
                            id="current_password"
                            v-model="form.current_password"
                            :feedback="false"
                            toggle-mask
                            class="w-full"
                            :invalid="!!form.errors.current_password"
                            :pt="{
                                pcInput: { class: 'w-full' },
                            }"
                        />
                        <small v-if="form.errors.current_password" class="text-red-500">
                            {{ form.errors.current_password }}
                        </small>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-surface-900 dark:text-surface-0"> Nuova Password </label>
                        <Password
                            fluid
                            id="password"
                            v-model="form.password"
                            toggle-mask
                            class="w-full"
                            :invalid="!!form.errors.password"
                            promptLabel="Scegli la password"
                            weakLabel="Così facile? 😱"
                            mediumLabel="Suvvia, puoi fare di meglio! 😅"
                            strongLabel="Questa si che è una password sicura 😎"
                        />
                        <small v-if="form.errors.password" class="text-red-500">
                            {{ form.errors.password }}
                        </small>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label for="password_confirmation" class="text-surface-900 dark:text-surface-0">
                            Conferma Nuova Password
                        </label>
                        <Password
                            fluid
                            id="password_confirmation"
                            v-model="form.password_confirmation"
                            :feedback="false"
                            toggle-mask
                            class="w-full"
                            :invalid="!!form.errors.password_confirmation"
                            :pt="{
                                pcInput: { class: 'w-full' },
                            }"
                        />
                        <small v-if="form.errors.password_confirmation" class="text-red-500">
                            {{ form.errors.password_confirmation }}
                        </small>
                    </div>
                </div>

                <div>
                    <Button
                        type="submit"
                        label="Aggiorna Password"
                        :disabled="form.processing"
                        :loading="form.processing"
                    />
                </div>
            </form>
        </div>
    </div>
</template>
