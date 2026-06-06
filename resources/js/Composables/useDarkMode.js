import { ref, onMounted, onUnmounted } from 'vue';

const isDark = ref(false);

export function useDarkMode() {
    let mediaQuery = null;

    const applyTheme = (dark) => {
        isDark.value = dark;
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        if (isDark.value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleSystemThemeChange = (e) => {
        // Applica il tema del sistema solo se l'utente non ha impostato una preferenza manuale
        const savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
            applyTheme(e.matches);
        }
    };

    const initDarkMode = () => {
        const savedTheme = localStorage.getItem('theme');

        // Crea il media query listener
        mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        if (savedTheme) {
            // Se c'è un tema salvato, usalo
            applyTheme(savedTheme === 'dark');
        } else {
            // Altrimenti, usa il tema del sistema
            applyTheme(mediaQuery.matches);
        }

        // Ascolta i cambiamenti del tema del sistema
        mediaQuery.addEventListener('change', handleSystemThemeChange);
    };

    onMounted(() => {
        initDarkMode();
    });

    onUnmounted(() => {
        // Rimuovi il listener quando il componente viene smontato
        if (mediaQuery) {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        }
    });

    return {
        isDark,
        toggleDarkMode,
        initDarkMode,
    };
}
