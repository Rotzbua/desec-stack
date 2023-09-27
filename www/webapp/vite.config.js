/* eslint-env node */
import {defineConfig, loadEnv} from 'vite'
import {resolve} from 'node:path';
import Components from 'unplugin-vue-components/vite'
import {VuetifyResolver} from 'unplugin-vue-components/resolvers'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue2'

const defaultAPIUrl = 'http://localhost';

export default defineConfig(({command, mode, ssrBuild}) => {
    // Load env file based on `mode` in the current working directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    // https://main.vitejs.dev/config/#using-environment-variables-in-config
    const env = loadEnv(mode, process.cwd(), '')
    const activeAPIUrl = env.VITE_APP_TARGET_API ?? defaultAPIUrl;
    return {
        define: {
            'process.env.BUILD': '"web"' // fix for vuelidate@0.7.7
        },
        plugins: [
            vue(),
            Components({
                resolvers: [VuetifyResolver()],
            }),
            legacy(), // Build for old browser.
        ],
        server: {
            port: 8080,
            proxy: {
                '/api': {
                    target: activeAPIUrl,
                    changeOrigin: true,
                    secure: false,
                }
            },
        },
        resolve: {
            alias: [{
                find: '@', replacement: resolve(__dirname, 'src')
            }],
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        }
    }
})
