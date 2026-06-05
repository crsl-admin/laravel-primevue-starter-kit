<script setup>
import InputText from 'primevue/inputtext';

defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    id: {
        type: String,
        default: null,
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: '',
    },
    required: {
        type: Boolean,
        default: false,
    },
    invalid: {
        type: Boolean,
        default: false,
    },
});

defineEmits(['update:modelValue']);
</script>

<template>
    <InputText
        :id="id"
        :model-value="modelValue"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :invalid="invalid"
        class="w-full"
        @update:model-value="$emit('update:modelValue', $event)"
    />
</template>
