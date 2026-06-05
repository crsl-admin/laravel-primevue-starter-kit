<script setup>
import Select from 'primevue/select';

const props = defineProps({
    modelValue: {
        type: [String, Number, Object],
        default: null,
    },
    options: {
        type: Array,
        default: () => [],
    },
    optionLabel: {
        type: String,
        default: 'label',
    },
    optionValue: {
        type: String,
        default: 'value',
    },
    placeholder: {
        type: String,
        default: '',
    },
    invalid: {
        type: Boolean,
        default: false,
    },
    class: {
        type: String,
        default: '',
    },
});

defineEmits(['update:modelValue', 'change']);
</script>

<template>
    <Select
        :model-value="modelValue"
        :options="options"
        :option-label="optionLabel"
        :option-value="optionValue"
        :placeholder="placeholder"
        :invalid="invalid"
        :class="['w-full md:w-56', props.class]"
        @update:model-value="$emit('update:modelValue', $event)"
        @change="$emit('change', $event)"
    />
</template>
