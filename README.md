# Contents
---
- [Documentation](#documentation)
- [Development](#development)
  - [Scaffold your project](#scaffold-your-project)
  - [Add Flare Vue dependencie](#add-flare-vue-dependencie)
  - [Installing dependencies](#installing-dependencies)
  - [Configuring Flare](#configuring-flare)
    - [Importing dependencies](#importing-dependencies)
    - [Creating a template](#creating-a-template)
- [Build](#build)
- [Deployment](#deployment)

# Documentation

Flare Vue combines the core Flare features with the tooling that are tailored to Vue.js developers.

Flare Vue is built on top of Vue 3.0.0.

# Development

Prerequisites:

- Node.js version >=12.2.0 

## Scaffold your project

Use [Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) to quickly scaffold your project.

With NPM:

```
npm create vite@latest my-vue-app -- --template vue
```

## Add Flare Vue dependencie

Add Flare Vue to dev dependencies

With NPM:
```
npm add @lkmx/flare-vue
```

## Installing dependencies

With NPM:
```
npm install
```

## Configuring Flare

### Importing dependencies

Import into ```main.js``` Flare dependencies

```
import Flare from "@lkmx/flare";
import FlareVue from "@lkmx/flare-vue";

app.use(Flare)
app.use(FlareVue)

```

To avoid any unexpected behavior, delete all styles from ```.src/App.vue```

### Creating a template

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

# Build
Use ```npm run build``` to generate static files in a ```/dist``` folder

# Deployment
TBD