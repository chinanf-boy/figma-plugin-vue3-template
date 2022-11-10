# Figma + Vue3 + Vite

A starter for creating a Figma Plugin with Vue3, Typescript, and Vite

> Unocss；unplugin-auto-import；vite-plugin-singlefile；

## dev (watch)

```bash
pnpm i && pnpm watch
```


## About Figma Plugin 

All it Need (main + ui):

> manifest.json

```json
  "main": "dist/code.js",
  "ui": "dist/index.html",
```

- **main**: to use figma plugin API.
- **ui**  : single html file touch the main

**main <=`postMessage/onmessage`=> ui**