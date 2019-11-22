import Guide from './pages/guide'
import Capt1 from './pages/capt1base'
import Capt2 from './pages/capt2share'
import Capt3 from './pages/capt3images'

// test pages
import ReactLifeCircle from './pages/_test/react-life-circle'

// 是否打开测试页面
const useTestPage = true
const testPages = [
  {
    title: 'react生命周期',
    type: 'test',
    pathName: 'reactlifecircle',
    component: ReactLifeCircle
  }
]

export default [
  {
    title: '帮助',
    pathName: 'guide',
    component: Guide
  },
  {
    title: '基础接口',
    pathName: 'base',
    component: Capt1
  },
  {
    title: '分享接口',
    pathName: 'share',
    component: Capt2
  },
  {
    title: '图片接口',
    pathName: 'images',
    component: Capt3
  }
].concat(useTestPage ? testPages : [])