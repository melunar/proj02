import React from 'react'
import dayjs from 'dayjs'
// import { Table } from 'antd'
import Table from 'antd/lib/table'
import 'antd/lib/table/style/index.css'
// import 'antd/dist/antd.css'
// import videoSource from './assets/video.mp4'
import './App.scss'


class App extends React.Component {
  constructor(props) {
    super()
    this.listRef = React.createRef()
  }
  state = {
    day: dayjs().day(),
    date: dayjs().format('YYYY年M月D日'),
    curTime: dayjs().format('HH:mm:ss'),
    dataList: [
      { name: '李雷', ticketNumber: '10101010011', batchNumber: 1 },
      { name: '李雷', ticketNumber: '10101010012', batchNumber: 1 },
      { name: '李雷', ticketNumber: '10101010013', batchNumber: 1 },
      { name: '李雷', ticketNumber: '10101010014', batchNumber: 1 },
      { name: '李雷', ticketNumber: '10101010015', batchNumber: 1 },
      { name: '李雷', ticketNumber: '10101010016', batchNumber: 1 },
      { name: '李雷', ticketNumber: '10101010017', batchNumber: 1 },
      { name: '李雷', ticketNumber: '10101010018', batchNumber: 1 },
      { name: '李雷', ticketNumber: '10101010019', batchNumber: 1 },
      { name: '李小红', ticketNumber: '10101010021', batchNumber: 2 },
      { name: '李小红', ticketNumber: '10101010022', batchNumber: 2 },
      { name: '李小红', ticketNumber: '10101010023', batchNumber: 2 },
      { name: '李小红', ticketNumber: '10101010024', batchNumber: 2 },
      { name: '李小红', ticketNumber: '10101010025', batchNumber: 2 },
      { name: '李小红', ticketNumber: '10101010026', batchNumber: 2 },
      { name: '李小红', ticketNumber: '10101010027', batchNumber: 2 },
      { name: '李小红', ticketNumber: '10101010028', batchNumber: 2 },
    ],
    columns: [
      { title: '姓名', dataIndex: 'name', key: 'name', width: 150 },
      { title: '准考证', dataIndex: 'ticketNumber', key: 'ticketNumber' },
      { title: '批次', dataIndex: 'batchNumber', key: 'batchNumber', width: 80 },
    ],
    tableHeight: 400,
  }
  componentDidMount () {
    setInterval( () => {
      this.setState({
        curTime : dayjs().format('HH:mm:ss')
      })
    }, 1000)
    setTimeout(() => {
      const {clientWidth, clientHeight} = this.listRef
      this.setState({ tableHeight: clientHeight - 80 })
      // height: this.container.offsetHeight

    })
  }
  render () {
    const { dataList, columns, day, date, curTime, tableHeight } = this.state
    const dayZH = { 0: '日', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六'}[day]
    return (
      <div className="App">
        <div className="App-content">
          <header className="App-both-end">
            <span className="row-header">候测区</span>
            <span className="current-time">{date} 星期{dayZH} {curTime}</span>
          </header>
          <div className="mid-content">
            <div className="video-wrap">
              <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls="controls">
                您的浏览器不支持视频播放
              </video>
            </div>
            <div className="data-list" ref={el => (this.listRef = el)}>
              <Table dataSource={dataList} columns={columns} pagination={false} key="ticketNumber" scroll={{ y: tableHeight }}/>
            </div>
          </div>
          <header className="App-both-end">
            <span className="row-bottom">温馨提示：请保持安静，耐心等候</span>
          </header>
        </div>
      </div>
    )
  }
}

export default App
