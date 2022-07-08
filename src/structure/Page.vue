<template>
  <main class="--flare --flare-page">
    <slot></slot>
  </main>
</template>
<script>
export default {
  beforeCreate() {
    document.body.classList.add('--flare-hidden')
  },
  mounted() {
    document.body.classList.remove('--flare-hidden')
  }
}
</script>