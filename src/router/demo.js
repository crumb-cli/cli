const ACompnenent = () => import('../pages/a.vue')
const BComponent = () => import('../pages/b.vue')


export default [
  {
    path: '/a',
    name: 'Apage',
    meta: {
      title: 'page a',
      scroll: true,  // 判断是否记录滚动位置
      keepAlive: true // 是否不销毁组件
    },
    component: ACompnenent
  },
  {
    path: '/b',
    name: 'bpage',
    meta: {
      title: 'page b',
      scroll: false,  // 判断是否记录滚动位置
      keepAlive: true // 是否不销毁组件
    },
    component: BComponent,
    
  }
]