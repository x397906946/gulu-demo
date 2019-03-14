<template>
  <div style="padding-top: 16px;">
    <h2>自定义设置</h2>
    <p><strong>预览</strong></p>
    <div>
      <g-button @click="onClickButton">上方弹出</g-button>
    </div>

    <p><strong>代码</strong></p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .wrapper {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/plugin'
  import GButton from '../../../src/button/button'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {GButton},
    data () {
      return {
        content: `
          <style>
            .wrapper {
              z-index: 30;
            }
          </style>
          <div>
            <g-button @click="onClickButton">上方弹出</g-button>
          </div>
          methods: {
            onClickButton () {
              this.$toast('你知道如何自定义设置吗？', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('用户说知道了')
                  }
                }
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('你知道如何自定义设置吗？', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('用户说知道了')
            }
          }
        })
      }
    },
  }
</script>