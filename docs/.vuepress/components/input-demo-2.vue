<template>
  <div style="padding-top: 16px;">
    <h2>双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input v-model="value"></g-input>
    <div>
      值: {{value}}
    </div>

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
        value: '请输入',
        content: `
          data:{
            value: '请输入'
          }
          <g-input v-model="value"></g-input>
          <div>
            value: {{value}}
          </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>