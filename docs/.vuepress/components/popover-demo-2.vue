<template>
  <div style="padding-top: 16px;">
    <h2>hover 触发</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="upOrDown">
      <g-popover position="elevenClock" trigger="hover">
        <g-button>11点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="twelveClock" trigger="hover">
        <g-button>12点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover trigger="hover">
        <g-button>1点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>
    <div class="leftOrRight">
      <g-popover position="tenClock" trigger="hover">
        <g-button>10点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="twoClock" trigger="hover">
        <g-button>2点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>
    <div class="leftOrRight">
      <g-popover position="nineClock" trigger="hover">
        <g-button>9点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="threeClock" trigger="hover">
        <g-button>3点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>
    <div class="leftOrRight">
      <g-popover position="eightClock" trigger="hover">
        <g-button>8点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="fourClock" trigger="hover">
        <g-button>4点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>
    <div class="upOrDown">
      <g-popover position="sevenClock" trigger="hover">
        <g-button>7点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="sixClock" trigger="hover">
        <g-button>6点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="fiveClock" trigger="hover">
        <g-button>5点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GButton from '../../../src/button/button'
  import GPopover from '../../../src/popover/popover'
  export default {
    components: {GButton, GPopover},
    data () {
      return {
        content: `
          <g-popover position="elevenClock" trigger="hover">
            <g-button>11点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="twelveClock" trigger="hover">
            <g-button>12点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover trigger="hover">
            <g-button>1点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="twoClock" trigger="hover">
            <g-button>2点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="threeClock" trigger="hover">
            <g-button>3点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="fourClock" trigger="hover">
            <g-button>4点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="fiveClock" trigger="hover">
            <g-button>5点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="sixClock" trigger="hover">
            <g-button>6点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="sevenClock" trigger="hover">
            <g-button>7点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="eightClock" trigger="hover">
            <g-button>8点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="nineClock" trigger="hover">
            <g-button>9点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="tenClock" trigger="hover">
            <g-button>10点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style scoped lang="scss">
  .upOrDown{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 10px;
  }
  .leftOrRight {
    display: flex;
    padding: 0 10px;
    margin-bottom: 20px;
    justify-content: space-between;
  }
</style>