<template>
  <div class="collapseItem">
    <div class="title" :class="isActive" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GuluCollapseItem",
    props: {
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        open: false,
      }
    },
    inject: ['eventBus'],
    mounted() {
      this.eventBus && this.eventBus.$on('update:selected', (names) => {
        if(names.indexOf(this.name) >= 0){
          this.open = true
        }else{
          this.open = false
        }
      })
    },
    computed: {
      isActive(){
        return {
          active: this.open
        }
      }
    },
    methods:{
      toggle(){
        if(this.open) {
          this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
        } else {
          this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
        }
      },
    }
  }
</script>

<style scoped lang="scss">
  $grey: #ddd;
  $border-radius: 4px;
  .collapseItem{
    > .title {
      border: 1px solid $grey;
      margin: -1px;
      margin-bottom: auto;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      &:hover {
        background: rgba(0,0,0,.1);
      }
      &.active {
        font-weight: bold;
      }
    }
    &:first-child {
      > .title {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child {
      > .title:last-child {
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
    }
    > .content {
      padding: 8px;
      color: white;
      background: #999;
    }
  }
</style>