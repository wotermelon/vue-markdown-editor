export default (router)=>router.map({
  '/': {
    name: 'index', //应用首页
    component: require('./view/index')
  },
  '*': {
    name: '404',
    component: require('./view/404')
  }
})
