<script setup>
import Card from 'primevue/card';

const props = defineProps({
    class: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <Card
        :class="[
            'overflow-hidden rounded-xl border border-surface-200 bg-surface-0 shadow-sm dark:border-surface-800 dark:bg-surface-900',
            props.class,
        ]"
        unstyled
    >
        <template #content>
            <div class="p-6">
                <slot />
            </div>
        </template>
    </Card>
</template>
