import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';

export default {
    plugins: [react(), ssr()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.js',
    },
};
