<template>
  <header class="--flare-simple-header">
    <column :mode="mode">
      <block class="--flare-simple-header__content">
        <slot></slot>
      </block>
    </column>
  </header>
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