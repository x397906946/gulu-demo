module.exports = {
  base: '/gulu-demo/',
  title: '咕噜 UI',
  description: '一个简易但好用的 UI 框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get_started/'
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/toast',
          '/components/popover',
          '/components/tabs',
          '/components/grid',
          '/components/layout'
        ]
      }
    ]
  }
}