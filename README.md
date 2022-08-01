# Flare-Vue 
- [Flare-Vue](#flare-vue)
- [Documentation](#documentation)
  - [SPA: Vite](#spa-vite)
    - [Prerequisites](#prerequisites)
    - [Create project](#create-project)
    - [Install Flare](#install-flare)
    - [Create base layout](#create-base-layout)
    - [Create first page](#create-first-page)
  - [SSR/SSG: NuxtJS](#ssrssg-nuxtjs)
    - [Prerequisites](#prerequisites-1)
    - [Create a new project](#create-a-new-project)
    - [Install Flare](#install-flare-1)
    - [Create base layout](#create-base-layout-1)
    - [Create first page](#create-first-page-1)
- [Development](#development)


# Documentation

Flare-Vue combines the core Flare features with the tooling that are tailored to Vue.js developers.

Flare-Vue is built on top of Vue 3.0.0.

## SPA: Vite

Use [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) to quickly scaffold your project.

### Prerequisites

- Node.js version >= 12.2.0 

### Create project

With Yarn:

```
yarn create vite my-vue-app --template vue
```

### Install Flare

Add Flare-Vue to dev dependencies.

With Yarn:
```
yarn add @lkmx/flare-vue
yarn install
```

Import into ```main.js``` Flare dependencies.

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

To avoid any unexpected behavior, delete all styles from ```.src/App.vue```.

Run the proyect:
```
yarn run dev
```

### Create base layout

Create into ```src/components``` directory the following components:

```SimpleHeader.vue```
```
<template>
  <header>
    <Columns>
      <Block>
        <h1>Footer</h1>
        <h1>Header</h1>
      </Block>
    </Columns>
  </header>
</template>
```

```SimpleFooter.vue```
```
<template>
  <footer>
    <Columns>
      <Block>
        <h1>Footer</h1>
      </Block>
    </Columns>
  </footer>
</template>
```

```BaseLayout.vue```

```
<template>
  <div class="base-layout">
    <simple-header></simple-header>
    <main>
      <slot></slot>
    </main>
    <simple-footer></simple-footer>
  </div>
</template>

<script>
import SimpleHeader from './SimpleHeader.vue';
import SimpleFooter from './SimpleFooter.vue';

export default {
  components: { SimpleHeader, SimpleFooter }
}
</script>

<style scoped>
.base-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
```

### Create first page

Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled.

```
<template>
  <base-layout>
    <Page>
      <Columns>
        <Block>
          <h1>Flare it's easy to use</h1>
          <p>Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled.</p>
        </Block>
      </Columns>
    </Page>
  </base-layout>
</template>

<script>
import BaseLayout from './BaseLayout.vue';

export default {
  components: {BaseLayout}
}
</script>
```

## SSR/SSG: NuxtJS

Use [Nuxt](https://v3.nuxtjs.org/) to quickly scaffold your project.


### Prerequisites

- Node.js 14 or 16.

### Create a new project

```
npx nuxi init nuxt-app
```

### Install Flare

Add Flare-Vue to dev dependencies.

With Yarn:
```
yarn add @lkmx/flare-vue
yarn install
```

Import into ```nuxt.config.ts``` Flare dependencies.

```
import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path';

export default defineNuxtConfig({
    target: 'static',
    buildModules: ['@lkmx/flare-vue/nuxt.js'],
    css: ['@lkmx/flare'],
    alias: {
        '@': resolve(__dirname, './')
    },
    components: {
        global: true,
        dirs: ['~/components']
    }
})
```

To avoid any unexpected behavior, delete all styles from ```.src/App.vue```.

Run the proyect:
```
yarn run dev
```

### Create base layout

Create into ```components``` directory the following components:

```SimpleHeader.vue```
```
<template>
  <header>
    <Columns>
      <Block>
        <h1>Header</h1>
      </Block>
    </Columns>
  </header>
</template>
```

```SimpleFooter.vue```
```
<template>
  <footer>
    <Columns>
      <Block>
        <h1>Footer</h1>
      </Block>
    </Columns>
  </footer>
</template>
```

```BaseLayout.vue```

```
<template>
  <div class="base-layout">
    <simple-header></simple-header>
    <main>
      <slot></slot>
    </main>
    <simple-footer></simple-footer>
  </div>
</template>

<style scoped>
.base-layout {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
</style>
```

### Create first page

Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled.

```
<template>
  <base-layout>
    <Page>
      <Columns>
        <Block>
          <h1>Flare it's easy to use</h1>
          <p>Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled.</p>
        </Block>
      </Columns>
    </Page>
  </base-layout>
</template>
```

# Development

Pending