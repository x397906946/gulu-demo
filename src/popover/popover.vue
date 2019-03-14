<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible"
         :class="{[`position-${position}`]:true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: "GuluPopover",
    props: {
      position: {
        type: String,
        default: 'oneClock',
        validator (value) {
          return [
            'oneClock', 'twoClock', 'threeClock', 'fourClock', 'fiveClock', 'sixClock',
            'sevenClock', 'eightClock', 'nineClock', 'tenClock', 'elevenClock', 'twelveClock'
          ].indexOf(value) >= 0
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator (value) {
          return ['click', 'hover'].indexOf(value) >= 0
        }
      }
    },
    data () {
      return {
        visible: false,
      }
    },
    mounted () {
      this.addPopoverListeners()
    },
    beforeDestroy () {
      this.putBackContent()
      this.removePopoverListeners()
    },
    computed: {
      openEvent () {
        if (this.trigger === 'click') {
          return 'click'
        } else {
          return 'mouseenter'
        }
      },
      closeEvent () {
        if (this.trigger === 'click') {
          return 'click'
        } else {
          return 'mouseleave'
        }
      }
    },
    methods: {
      addPopoverListeners(){
        if (this.trigger === 'click') {
          this.$refs.popover.addEventListener('click', this.onClick)
        } else {
          this.$refs.popover.addEventListener('mouseenter', this.open)
          this.$refs.popover.addEventListener('mouseleave', this.close)
        }
      },
      removePopoverListeners(){
        if (this.trigger === 'click') {
          this.$refs.popover.removeEventListener('click', this.onClick)
        } else {
          this.$refs.popover.removeEventListener('mouseenter', this.open)
          this.$refs.popover.removeEventListener('mouseleave', this.close)
        }
      },
      putBackContent(){
        const {contentWrapper, popover} = this.$refs
        if(!contentWrapper){return}
        popover.appendChild(contentWrapper)
      },
      positionContent () {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        const {height: height2, width: width2} = contentWrapper.getBoundingClientRect()
        let positions = {
          elevenClock: {top: top + window.scrollY, left: left + window.scrollX + width - width2},
          twelveClock: {top: top + window.scrollY, left: left + window.scrollX + (width - width2) / 2},
          oneClock: {top: top + window.scrollY, left: left + window.scrollX},
          twoClock: {top: top + window.scrollY , left: left + window.scrollX + width},
          threeClock: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX + width},
          fourClock: {top: top + window.scrollY + height - height2, left: left + window.scrollX + width},
          fiveClock: {top: top + height + window.scrollY, left: left + window.scrollX},
          sixClock: {top: top + height + window.scrollY, left: left + window.scrollX + (width - width2) / 2},
          sevenClock: {top: top + height + window.scrollY, left: left + window.scrollX + width - width2},
          eightClock: {top: top + window.scrollY + height - height2, left: left + window.scrollX},
          nineClock: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX},
          tenClock: {top: top + window.scrollY, left: left + window.scrollX}
        }
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'
      },
      onClickDocument (e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return }
        if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) { return }
        this.close()
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
  .popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    background: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;
    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-elevenClock, &.position-twelveClock, &.position-oneClock {
      transform: translateY(-100%);
      margin-top: -10px;
      &::before {
        border-top-color: black;
        border-bottom: none;
        top: 100%;
      }
      &::after {
        border-top-color: white;
        border-bottom: none;
        top: calc(100% - 1px);
      }
    }
    &.position-elevenClock {
      &::before, &::after {
        right: 1.2em;
      }
    }
    &.position-twelveClock {
      &::before, &::after {
        left: calc(50% - .6em);
      }
    }
    &.position-oneClock {
      &::before, &::after {
        left: 1.2em;
      }
    }
    &.position-twoClock, &.position-threeClock, &.position-fourClock {
      margin-left: 10px;
      &::before {
        border-right-color: black;
        border-left: none;
        right: 100%;
      }
      &::after {
        border-right-color: white;
        border-left: none;
        right: calc(100% - 1px);
      }
    }
    &.position-twoClock {
      &::before, &::after {
        transform: translateY(-50%);
        top: 1.2em;
      }
    }
    &.position-threeClock {
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
    }
    &.position-fourClock {
      &::before, &::after {
        transform: translateY(50%);
        bottom: 1.2em;
      }
    }
    &.position-fiveClock, &.position-sixClock, &.position-sevenClock{
      margin-top: 10px;
      &::before {
        border-top: none;
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after {
        border-top: none;
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-fiveClock {
      &::before, &::after {
        left: 1.2em;
      }
    }
    &.position-sixClock {
      &::before, &::after {
        left: calc(50% - .6em);
      }
    }
    &.position-sevenClock {
      &::before, &::after {
        right: 1.2em;
      }
    }
    &.position-eightClock, &.position-nineClock, &.position-tenClock{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before {
        border-left-color: black;
        border-right: none;
        left: 100%;
      }
      &::after {
        border-left-color: white;
        border-right: none;
        left: calc(100% - 1px);
      }
    }
    &.position-eightClock {
      &::before, &::after {
        transform: translateY(50%);
        bottom: 1.2em;
      }
    }
    &.position-nineClock {
      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }
    }
    &.position-tenClock {
      &::before, &::after {
        transform: translateY(-50%);
        top: 1.2em;
      }
    }
  }
</style>