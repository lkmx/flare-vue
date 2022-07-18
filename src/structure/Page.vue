<template>
  <main class="--flare --flare-page">
    <slot></slot>
  </main>
</template>
<script>
export default {
  mounted() {
    document.body.classList.remove('--flare-hidden');
  }
}
</script>