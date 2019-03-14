<template>
  <div style="padding-top: 16px;">
    <h2>使用方法</h2>

    <p><strong>预览</strong></p>
    <g-button>默认</g-button>
    <g-button icon="setting">左图标</g-button>
    <g-button icon="setting" iconPosition="right">右图标</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button disabled>不可选</g-button>

    <p><strong>代码</strong></p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button/button'
  export default {
    components: {
      'g-button': Button
    },
    data () {
      return {
        content: `
          <g-button icon="setting">左图标</g-button>
          <g-button icon="setting" iconPosition="right">右图标</g-button>
          <g-button :loading="true">加载中</g-button>
          <g-button disabled>不可选</g-button>
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>