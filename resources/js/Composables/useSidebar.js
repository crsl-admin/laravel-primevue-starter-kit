import { ref, computed } from 'vue';

const isOpen = ref(true);
const isMobile = ref(false);

export function useSidebar() {
    const toggleSidebar = () => {
        isOpen.value = !isOpen.value;
    };

    const closeSidebar = () => {
        isOpen.value = false;
    };

    const openSidebar = () => {
        isOpen.value = true;
    };

    const checkMobile = () => {
        isMobile.value = window.innerWidth < 768;
        if (isMobile.value) {
            isOpen.value = false;
        }
    };

    return {
        isOpen,
        isMobile,
        toggleSidebar,
        closeSidebar,
        openSidebar,
        checkMobile,
    };
}
