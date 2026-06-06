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
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{stone.50}',
                    100: '{stone.100}',
                    200: '{stone.200}',
                    300: '{stone.300}',
                    400: '{stone.400}',
                    500: '{stone.500}',
                    600: '{stone.600}',
                    700: '{stone.700}',
                    800: '{stone.800}',
                    900: '{stone.900}',
                    950: '{stone.950}'
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '{neutral.50}',
                    100: '{neutral.100}',
                    200: '{neutral.200}',
                    300: '{neutral.300}',
                    400: '{neutral.400}',
                    500: '{neutral.500}',
                    600: '{neutral.600}',
                    700: '{neutral.700}',
                    800: '{neutral.800}',
                    900: '{neutral.900}',
                    950: '{neutral.950}'
                }
            }
        }
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
