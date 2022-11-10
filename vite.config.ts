import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'

import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Unocss({
            mode: 'dist-chunk',
            presets: [
                presetAttributify(), 
                presetUno()
            ],
            // shortcuts: {
            //     'c-r': 'color-red'
            // }
        }),
        AutoImport({
            imports: [
                // presets
                'vue'
            ],
            dts: './src/auto-imports.d.ts'
        }),
        vue(),
        viteSingleFile()
    ],
    build: {
        // https://vitejs.cn/config/#build-csscodesplit
        cssCodeSplit: false,
        // https://vitejs.cn/config/#build-assetsinlinelimit
        assetsInlineLimit: 100000000,
        rollupOptions: {
            input: {
                index: 'index.html',
                code: 'figma/code.ts'
            },
            output: {
                entryFileNames: '[name].js'
            }
        }
    }
})
