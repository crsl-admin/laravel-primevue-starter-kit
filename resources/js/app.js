import {createInertiaApp} from "@inertiajs/vue3";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import ToastService from 'primevue/toastservice';
import { ZiggyVue } from 'ziggy-js';
import { InputText, Textarea, InputGroup, InputGroupAddon, Button, Tooltip } from 'primevue';

const defaultPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{green.50}',
            100: '{green.100}',
            200: '{green.200}',
            300: '{green.300}',
            400: '{green.400}',
            500: '{green.500}',
            600: '{green.600}',
            700: '{green.700}',
            800: '{green.800}',
            900: '{green.900}',
            950: '{green.950}',
        },
    },
});

createInertiaApp({
    withApp(app) {
        app
            // .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: defaultPreset,
                    options: {
                        darkModeSelector: '.dark',
                    },
                },
            })
            .use(ToastService)
            .component('InputText', InputText)
            .component('Textarea', Textarea)
            .component('InputGroup', InputGroup)
            .component('InputGroupAddon', InputGroupAddon)
            .component('Button', Button)
            .directive('tooltip', Tooltip);
    },
});
