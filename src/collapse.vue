<template>
  <div class="collapse">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuluCollapse"
  }
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>