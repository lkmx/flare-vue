<template>
  <main class="--flare --flare-page">
    <slot></slot>
  </main>
</template>
<script>
export default {
  beforeMount() {
    document.body.classList.add('--flare-hidden')
  },
  mounted() {
    document.body.classList.remove('--flare-hidden')
  }
}
</script>