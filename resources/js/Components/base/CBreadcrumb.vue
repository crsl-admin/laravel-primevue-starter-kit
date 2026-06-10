<script setup>
import Breadcrumb from 'primevue/breadcrumb';

const props = defineProps({
    items: {
        type: Array,
        required: true,
    },
    home: {
        type: Object,
        default: null,
    },
});
</script>

<template>
    <Breadcrumb :model="items" :home="home" class="border-0 bg-transparent! p-0">
        <template #item="{ item }">
            <a
                v-if="item.url"
                :href="item.url"
                class="text-muted-foreground hover:text-foreground transition-colors"
            >
                {{ item.label }}
            </a>
            <span v-else class="text-foreground">
                {{ item.label }}
            </span>
        </template>
    </Breadcrumb>
</template>
