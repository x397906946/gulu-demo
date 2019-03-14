<template>
  <div style="padding-top: 16px;">
    <h2>使用方法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input></g-input>
    <g-input value="默认值"></g-input>
    <g-input value="不可选" disabled></g-input>
    <g-input value="只读" readonly></g-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GInput from '../../../src/input/input'
  export default {
    components: {GInput},
    data () {
      return {
        selected: '1',
        content: `
          <g-input></g-input>
          <g-input value="默认值"></g-input>
          <g-input value="不可选" disabled></g-input>
          <g-input value="只读" readonly></g-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>