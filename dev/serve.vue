<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { FlareVueSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  FlareVueSample,
  // }
});
</script>

<template>
  <div id="app">
    <flare-vue-sample />
  </div>
</template>
