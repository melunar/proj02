import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FastClick from 'fastclick'

import 'antd-mobile/dist/antd-mobile.css';

FastClick.attach(document.body)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); // not allowed PWA(渐进式web应用程序)


/*
  todo

  react-router doc
  https://react-guide.github.io/react-router-cn/docs/guides/basics/Histories.html

  withRouter
  https://www.cnblogs.com/luowenshuai/p/9526341.html

  wx-sdk
  scriptjs('https://res.wx.qq.com/open/js/jweixin-1.4.0.js', () => ())

  wx-sdk doc
  https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
*/
