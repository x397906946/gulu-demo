<template>
  <div class="collapse">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "GuluCollapse",
    props: {
      single: {
        type: Boolean,
        default: false
      },
      selected: {
        type: String
      }
    },
    data() {
      return {
        eventBus: new Vue()
      }
    },
    provide(){
        return {
          eventBus: this.eventBus
        }
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.selected)
    }
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