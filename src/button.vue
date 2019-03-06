<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
    <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'
  export default {
    name: 'GuluButton',
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value){
          return value === 'left' || value === 'right'
        }
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0% { tramsform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {border-color: var(--border-color-hover);}
    &:active {background: var(--button-active-bg);}
    &:focus {outline: none;}
    > .icon {order: 1;margin-right: .3em;}
    > .content {order: 2;}
    &.icon-right {
      > .icon {order: 2;margin-right: 0;margin-left: .3em;}
      > .content {order: 1;}
    }
    .loading { animation: spin .6s infinite linear;}
  }
</style>