<script setup>
import Button from 'primevue/button';

defineProps({
    label: {
        type: String,
        default: null,
    },
    icon: {
        type: String,
        default: null,
    },
    severity: {
        type: String,
        default: null,
    },
    size: {
        type: String,
        default: null,
    },
    text: {
        type: Boolean,
        default: false,
    },
    outlined: {
        type: Boolean,
        default: false,
    },
    rounded: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <Button
        :label="label"
        :icon="icon"
        :severity="severity"
        :size="size"
        :text="text"
        :outlined="outlined"
        :rounded="rounded"
        :disabled="disabled"
    >
        <slot />
    </Button>
</template>
