<template>
  <div style="padding-top: 16px;">
    <h2>使用方法</h2>
    <g-collapse :selected.sync="selectedTab">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
    你现在选中的是：{{selectedTab.join('、')}}

    <p><strong>代码</strong></p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GCollapse from '../../../src/collapse/collapse'
  import GCollapseItem from '../../../src/collapse/collapse-item'
  export default {
    components: { GCollapse, GCollapseItem },
    data () {
      return {
        selectedTab: ['1', '2'],
        content: `
          <g-collapse :selected.sync="selectedTab">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
          </g-collapse>
          你现在选中的是：{{selectedTab.join('、')}}
      `.replace(/\t+| +/g, '').trim()
      }
    }
  }
</script>