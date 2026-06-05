<script setup>
import Avatar from 'primevue/avatar';

defineProps({
    image: {
        type: String,
        default: null,
    },
    label: {
        type: String,
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
    size: {
        type: String,
        default: 'normal',
        validator: (value) => ['normal', 'large', 'xlarge'].includes(value),
    },
    shape: {
        type: String,
        default: 'circle',
        validator: (value) => ['circle', 'square'].includes(value),
    },
});
</script>

<template>
    <Avatar :image="image" :label="label" :icon="icon" :size="size" :shape="shape" class="transition-colors" />
</template>
