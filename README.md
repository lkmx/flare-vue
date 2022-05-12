# Flare-Vue
---
- [Documentation](#documentation)
  - [SPA: Vite](#vite-configuration)
    - [Create project](#create-project)
    - [Install Flare](#install-flare)
  - [SSR/SSG: NuxtJS](#nuxt-configuration)
    - [Creating a template](#creating-a-template)
- [Development](#development)


# Documentation

Flare Vue combines the core Flare features with the tooling that are tailored to Vue.js developers.

Flare Vue is built on top of Vue 3.0.0.

# Install

Prerequisites:

- Node.js version >=12.2.0 

### Add Flare Vue dependencie

Add Flare Vue to dev dependencies

With NPM:
```
npm add @lkmx/flare-vue
```

## Vite configuration

Use [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) to quickly scaffold your project.

With NPM:

```
npm create vite@latest my-vue-app -- --template vue
```

#### Importing dependencies

Import into ```main.js``` Flare dependencies

```
import { createApp } from 'vue'
import App from './App.vue'
import Flare from "@lkmx/flare";
import FlareVue from "@lkmx/flare-vue";

createApp(App)
    .use(Flare)
    .use(FlareVue)
    .mount('#app');

```

To avoid any unexpected behavior, delete all styles from ```.src/App.vue```

## Nuxt Configuration

Use [Nuxt](https://v3.nuxtjs.org/) to quickly scaffold your project

With NPM:
```
npx nuxi init nuxt-app
```
### Importing dependencies

Import into ```nuxt.config.ts``` Flare dependencies

```
import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path';

export default defineNuxtConfig({
    target: 'static',
    buildModules: ['@lkmx/flare-vue/nuxt.js'],
    css: ['@lkmx/flare'],
    alias: {
        '@': resolve(__dirname, './')
    }
})

```

## Creating a template

Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled 

```
<template>
  <simple-layout>
    <Page>
      <Columns>
        <Block>
          <h1>Flare it's easy to use</h1>
          <p>Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled.</p>
        </Block>
      </Columns>
    </Page>
  </simple-layout>
</template>
```