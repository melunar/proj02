import React from 'react'
import logo from './logo.svg'

import VConsole from 'vconsole'
import { BrowserRouter, Switch, Router, Route, Redirect } from 'react-router-dom'
import { Drawer, List, NavBar, Icon } from 'antd-mobile'
// import Guide from './pages/guide'
import routerComs from './routers'
import { setPageTitle } from './common/utils'

import './App.css'

new VConsole()

export default class App extends React.Component {
  state = {
    drawerOpen: false
  }

  onOpenChange = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  setPageTitle = (title) => (e) => {
    debugger
    title && (document.title = title)
  }

  render() {
    const siderBarNode = (
      routerComs.map((item, index) => {
        return (<List.Item key={index}
          multipleLine
        ><a href={`/${item.pathName}`} className={item.type==='test'?'test':''}>{index?index+'、':''}{item.title}</a></List.Item>)
      })
    )
    return (
      <div className="App">
        <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </NavBar>
        <Drawer
          className="my-drawer"
          // style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          contentStyle={{ color: '#666', textAlign: 'center', paddingTop: 42 }}
          sidebar={siderBarNode}
          open={this.state.drawerOpen}
          onOpenChange={this.onOpenChange}>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact render={() => <Redirect to={'/'+routerComs[0].pathName} />} />
                {routerComs.map((Item, index) => {
                  return <Route path={`/${Item.pathName}`} onEnter={
                    (nextState, replaceState) => { 
                      // todo null ??? debugger
                      setPageTitle(Item.title)
                    }
                  } component={Item.component} key={index}></Route>
                })}
              </Switch>
            </BrowserRouter>
        </Drawer>
      </div>
    )
  }
}
