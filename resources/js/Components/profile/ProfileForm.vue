<script setup>
import { useForm } from '@inertiajs/vue3';
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

const form = useForm({
    first_name: props.user?.first_name || '',
    last_name: props.user?.last_name || '',
    email: props.user?.email || '',
    website: props.user?.website || '',
    company: props.user?.company || '',
});

const updateProfile = () => {
    form.patch(route('profile.update'), {
        preserveScroll: true,
    });
};
</script>

<template>
    <div class="flex-auto rounded-2xl bg-surface-0 p-8 dark:bg-surface-900">
        <div class="flex flex-col gap-8">
            <div class="text-lg leading-tight font-semibold text-surface-900 dark:text-surface-0">Profilo</div>

            <form class="flex flex-col gap-12" @submit.prevent="updateProfile">
                <div class="flex flex-col-reverse gap-12 md:flex-row">
                    <div class="flex flex-auto flex-col gap-6">
                        <div class="grid grid-cols-12 gap-7">
                            <div class="col-span-12 flex flex-col gap-2 md:col-span-6">
                                <label for="first_name" class="text-surface-900 dark:text-surface-0"> Nome </label>
                                <InputText
                                    id="first_name"
                                    v-model="form.first_name"
                                    type="text"
                                    class="w-full"
                                    :invalid="!!form.errors.first_name"
                                />
                                <small v-if="form.errors.first_name" class="text-red-500">
                                    {{ form.errors.first_name }}
                                </small>
                            </div>

                            <div class="col-span-12 flex flex-col gap-2 md:col-span-6">
                                <label for="last_name" class="text-surface-900 dark:text-surface-0"> Cognome </label>
                                <InputText
                                    id="last_name"
                                    v-model="form.last_name"
                                    type="text"
                                    class="w-full"
                                    :invalid="!!form.errors.last_name"
                                />
                                <small v-if="form.errors.last_name" class="text-red-500">
                                    {{ form.errors.last_name }}
                                </small>
                            </div>
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="email" class="text-surface-900 dark:text-surface-0"> E-mail </label>
                            <InputText
                                id="email"
                                v-model="form.email"
                                type="email"
                                class="w-full"
                                :invalid="!!form.errors.email"
                            />
                            <small v-if="form.errors.email" class="text-red-500">
                                {{ form.errors.email }}
                            </small>
                        </div>

                        <!--                        <div class="flex flex-col gap-2">
                            <label for="website" class="text-surface-900 dark:text-surface-0">
                                URL
                            </label>
                            <InputGroup>
                                <InputGroupAddon>www</InputGroupAddon>
                                <InputText
                                    id="website"
                                    v-model="form.website"
                                    type="text"
                                    class="w-full"
                                    :invalid="!!form.errors.website"
                                />
                            </InputGroup>
                            <small v-if="form.errors.website" class="text-red-500">
                                {{ form.errors.website }}
                            </small>
                        </div>-->

                        <!--                        <div class="flex flex-col gap-2">
                            <label for="company" class="text-surface-900 dark:text-surface-0">
                                Company
                            </label>
                            <InputText
                                id="company"
                                v-model="form.company"
                                type="text"
                                class="w-full"
                                :invalid="!!form.errors.company"
                            />
                            <small v-if="form.errors.company" class="text-red-500">
                                {{ form.errors.company }}
                            </small>
                        </div>-->
                    </div>

                    <!--                    <div class="flex flex-col gap-2">
                        <label class="text-surface-900 dark:text-surface-0">Avatar</label>
                        <div class="flex flex-col lg:items-center gap-4">
                            <img
                                src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/object/public/block.images/blocks/formlayout/form-avatar.jpg"
                                alt="Avatar"
                                class="h-24 w-24 rounded-lg"
                            />

                            <FileUpload
                                mode="basic"
                                name="avatar"
                                url="./upload.php"
                                accept="image/*"
                                custom-upload
                                auto
                                class="p-button-outlined p-button-secondary"
                                :max-file-size="1000000"
                                choose-label="Upload"
                                choose-icon="pi pi-upload"
                                :pt="{
                                    root: {
                                        class: 'flex! justify-start! lg:justify-center!'
                                    }
                                }"
                            />
                        </div>
                    </div>-->
                </div>

                <div>
                    <Button label="Aggiorna" type="submit" :disabled="form.processing" :loading="form.processing" />
                </div>
            </form>
        </div>
    </div>
</template>
