import { useEffect } from 'react';

const SCROLL_DEBOUNCE_DELAY = 150; // Adjust as needed

function useScrollSpySync({ SCROLL_AREA, containerId, spyActiveLinkClass }) {
    useEffect(() => {
        const handleScroll = () => {
            const container = document.getElementById(containerId);
            const element = document.getElementsByClassName(spyActiveLinkClass)?.[0];

            if (element && container) {
                container.scroll({
                    left: SCROLL_AREA[element.id],
                    behavior: 'smooth',
                });
            }
        };

        // Debounce utility
        const debounce = (fn, delay) => {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => fn.apply(this, args), delay);
            };
        };

        const debouncedScrollHandler = debounce(handleScroll, SCROLL_DEBOUNCE_DELAY);

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', debouncedScrollHandler);

        return () => {
            window.removeEventListener('scroll', debouncedScrollHandler);
        };
    }, [SCROLL_AREA]);
};

export default useScrollSpySync;