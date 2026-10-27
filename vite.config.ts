import {
    URL, fileURLToPath
} from 'node:url';
import {
    defineConfig
} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig( {
    'plugins': [ vue() ],
    'resolve': {
        'alias': {
            '@': fileURLToPath( new URL( './src', import.meta.url ) )
        }
    },
    'server': {
        'port': 8081,
        'allowedHosts': true
    },
    'css': {
        'preprocessorOptions': {
            'scss': {
                'additionalData': `
@use "@/scss/main.scss" as *;
`
            }
        }
    },
    'base': process.env.NODE_ENV === 'production' ? '/lo-fi-prototype-2/' : '/'
} );
