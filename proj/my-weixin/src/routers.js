import Guide from './pages/guide'
import Capt1 from './pages/capt1'

// test pages
import ReactLifeCircle from './pages/_test/react-life-circle'

// 是否打开测试页面
const useTestPage = true
const testPages = [
  {
    title: 'react生命周期',
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
    pathName: 'capt1',
    component: Capt1
  }
].concat(useTestPage ? testPages : [])