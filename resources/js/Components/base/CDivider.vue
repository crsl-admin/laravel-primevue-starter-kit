<script setup>
import Divider from 'primevue/divider';

defineProps({
    layout: {
        type: String,
        default: 'horizontal',
        validator: (value) => ['horizontal', 'vertical'].includes(value),
    },
    type: {
        type: String,
        default: 'solid',
        validator: (value) => ['solid', 'dashed', 'dotted'].includes(value),
    },
});
</script>

<template>
    <Divider :layout="layout" :type="type" />
</template>
