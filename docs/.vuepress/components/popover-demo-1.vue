<template>
  <div style="padding-top: 16px;">
    <h2>click 触发</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div class="upOrDown">
      <g-popover position="elevenClock">
        <g-button>11点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="twelveClock">
        <g-button>12点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover>
        <g-button>1点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>
    <div class="leftOrRight">
      <g-popover position="tenClock" class="child">
        <g-button>10点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="twoClock" class="child">
        <g-button>2点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>
    <div class="leftOrRight">
      <g-popover position="nineClock" class="child">
        <g-button>9点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="threeClock" class="child">
        <g-button>3点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>
    <div class="leftOrRight">
      <g-popover position="eightClock" class="child">
        <g-button>8点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="fourClock" class="child">
        <g-button>4点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
    </div>
    <div class="upOrDown">
      <g-popover position="sevenClock">
        <g-button>7点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="sixClock">
        <g-button>6点钟</g-button>
        <template slot="content">
          弹出内容
        </template>
      </g-popover>
      <g-popover position="fiveClock">
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
  import GRow from '../../../src/grid/row'
  import GCol from '../../../src/grid/col'
  export default {
    components: {GButton, GPopover, GRow, GCol},
    data () {
      return {
        content: `
          <g-popover position="elevenClock">
            <g-button>11点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="twelveClock">
            <g-button>12点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover>
            <g-button>1点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="twoClock">
            <g-button>2点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="threeClock">
            <g-button>3点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="fourClock">
            <g-button>4点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="fiveClock">
            <g-button>5点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="sixClock">
            <g-button>6点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="sevenClock">
            <g-button>7点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="eightClock">
            <g-button>8点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="nineClock">
            <g-button>9点钟</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="tenClock">
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