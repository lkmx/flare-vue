<template>
  <footer class="--flare --flare-simple-footer">
    <columns :mode="mode">
      <block>
        <slot></slot>
      </block>
    </columns>
  </footer>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
    },
  },
};
</script>