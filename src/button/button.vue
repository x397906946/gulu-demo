<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
    <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
    <div class="g-button-content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from '../icon/icon'
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
  $font-size: 14px;
  $button-height: 32px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-hover-color: #666;
  @keyframes spin {
    0% { tramsform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .g-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    cursor: pointer;
    &:hover {border-color: $border-hover-color; box-shadow: 1px 1px 2px #999}
    &:active {background: $button-active-bg;}
    &:focus {outline: none;}
    > .icon {order: 1;margin-right: .1em;}
    > .g-button-content {order: 2;}
    &.icon-right {
      > .icon {order: 2;margin-right: 0;margin-left: .1em;}
      > .g-button-content {order: 1;}
    }
    .loading { animation: spin .6s infinite linear;}
    &:disabled {cursor: not-allowed; box-shadow: none;}
  }
</style>