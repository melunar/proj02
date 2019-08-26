import React from 'react'
import logo from './logo.svg'

import { BrowserRouter, Switch, Router, Route, Redirect } from 'react-router-dom'
import { Drawer, List, NavBar, Icon } from 'antd-mobile'
// import Guide from './pages/guide'
import routerComs from './routers'

import './App.css'



export default class App extends React.Component {
  state = {
    drawerOpen: false
  }

  onOpenChange = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    const siderBarNode = (
      routerComs.map((item, index) => {
        return (<List.Item key={index}
          multipleLine
        ><a href={`/${item.pathName}`}>{item.title}</a></List.Item>)
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
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
          sidebar={siderBarNode}
          open={this.state.drawerOpen}
          onOpenChange={this.onOpenChange}>
            Nice to meet you here!
        </Drawer>
        <BrowserRouter>
          <Switch>
            {/* <Route path="/" exact render={() => <Redirect to={'/'+routerComs[0].pathName} />} /> */}
            {routerComs.map((Item, index) => {
              return (<Route path={`/${Item.pathName}`} component={Item.component} key={index}></Route>)
            })}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
