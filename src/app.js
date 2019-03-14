import Vue from 'vue'
import Button from './button/button'
import Icon from './icon/icon'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Footer from './layout/footer'
import Sider from './layout/sider'
import Toast from './toast/toast'
import plugin from './plugin'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsItem from './tabs/tabs-item'
import TabsBody from './tabs/tabs-body'
import TabsPane from './tabs/tabs-pane'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

new Vue({
  el: '#app',
  data: {
    selectedTab: ['1', '2']
  },
  created(){
  },
  methods: {
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast('你的智商需要充值!', {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback(){
            console.log('他说已经充值了！')
          }
        },
        autoClose: 3
      })
    }
  }
})