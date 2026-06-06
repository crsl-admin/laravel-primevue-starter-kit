<script setup>
import { ref } from 'vue';
import Menu from 'primevue/menu';

const props = defineProps({
    model: {
        type: Array,
        required: true,
    },
    popup: {
        type: Boolean,
        default: false,
    },
});

const menu = ref();

const toggle = (event) => {
    menu.value.toggle(event);
};

defineExpose({
    toggle,
});
</script>

<template>
    <Menu ref="menu" :model="model" :popup="popup" />
</template>
