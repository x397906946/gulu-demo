<template>
  <div style="padding-top: 16px;">
    <h2>内侧边栏布局</h2>
    <p>
      <strong>预览</strong>
    </p>


    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; padding:10px;background:#999;">
        header
      </g-header>
      <g-layout>
        <g-sider style="height: 100px; padding:10px;background:#ddd; width:200px; color: black;">
          sider
        </g-sider>
        <g-content style="height: 100px; padding:10px;background:#666;">
          content
        </g-content>
      </g-layout>
      <g-footer style="height: 50px; padding:10px;background:#999;">
        footer
      </g-footer>
    </g-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GLayout from '../../../src/layout/layout'
  import GHeader from '../../../src/layout/header'
  import GFooter from '../../../src/layout/footer'
  import GContent from '../../../src/layout/content'
  import GSider from '../../../src/layout/sider'
  export default {
    components: {GLayout, GHeader, GFooter, GContent, GSider},
    data () {
      return {
        content: `
          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-header style="height: 50px; padding:10px;background:#999;">
              header
            </g-header>
            <g-layout>
              <g-sider style="height: 100px; padding:10px;background:#ddd; width:200px; color: black;">
                sider
              </g-sider>
              <g-content style="height: 100px; padding:10px;background:#666;">
                content
              </g-content>
            </g-layout>
            <g-footer style="height: 50px; padding:10px;background:#999;">
              footer
            </g-footer>
          </g-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>